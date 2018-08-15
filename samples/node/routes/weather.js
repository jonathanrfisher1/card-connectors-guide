/*
* Copyright © 2017 VMware, Inc. All Rights Reserved.
* SPDX-License-Identifier: BSD-2-Clause
*/

"use strict";



const uuidV4 = require('uuid/v4');

exports.requestCards = function(req, res) {
    if (!req.body.tokens) {
        res.status(400).send("Missing tokens field");
        return;
    }

    console.log("user_email", req.body.tokens.user_email);
    console.log("enrollment_identifier", req.body.tokens.enrollment_identifier);
    console.log("enrollment_username", req.body.tokens.enrollment_username);
    console.log("enrollment_group_identifier", req.body.tokens.enrollment_group_identifier);
    console.log("enrollment_device_udid", req.body.tokens.enrollment_device_udid);
    console.log("device_identifier", req.body.tokens.device_identifier);
    console.log("device_model", req.body.tokens.device_model);
    console.log("device_name", req.body.tokens.device_name);
    console.log("device_system_name", req.body.tokens.device_system_name);
    console.log("device_system_version", req.body.tokens.device_system_version);
    console.log("device_ui_idiom", req.body.tokens.device_ui_idiom);

    // Treat missing zips and empty zips the same way
    const zips = req.body.tokens.zip || [];

    // Real connectors will probably insist on receiving X-Routing-Prefix.
    // We will be more lax here.
    const routingPrefix = req.headers['x-routing-prefix'] || '/';

    res.json({cards: zips.map(function(zip){
      return toCard(zip, routingPrefix, req.body.tokens);
    })});
};

exports.testAuth = function(req, res) {
  res.status(200).send();
}

exports.reportWeather = function (req, res) {
    console.log(`Reporting temperature of ${req.body.temperature} for ${req.body.zip}`);
    res.status(200).end();
};

function toCard(zip, routingPrefix, tokens) {
    return {
        id: uuidV4(),
        template: {
            href: `${routingPrefix}templates/generic.hbs`
        },
        header: {
            title: `Weather forecast for ${zip}`
        },
        body: {
            description: "The weather is rather nice at the moment",
            fields: [
                {
                    type: "GENERAL",
                    title: "Temperature",
                    description: tokens.user_email[0]
                }, {
                    type: "GENERAL",
                    title: "Conditions",
                    description: "Sunny"
                }
            ]
        },
        actions: [
            {
                id: uuidV4(),
                action_key: "USER_INPUT",
                label: "Report weather",
                completed_label: "Weather reported successfully",
                url: {
                    href: `${routingPrefix}reports`
                },
                type: "POST",
                request: {
                    zip: zip
                },
                user_input: [
                    {
                        id: "temperature",
                        label: `Please enter temperature for ${zip}`
                    }
                ]
            }
        ]
    };
}
