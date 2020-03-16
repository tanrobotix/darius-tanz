export default {
    "type": "document",
    "name": "header",
    "title": "Header Configuration",
    "fields": [
        {
            "type": "markdown",
            "name": "content",
            "title": "Header Content",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "has_nav",
            "title": "Navigation Menu",
            "description": "Display the navigation bar in the header",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Header Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/header.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}