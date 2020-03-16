export default {
    "type": "object",
    "name": "postlist",
    "title": "Post List",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Section Title",
            "description": "The section title (Used by the CMS, even if it is not displayed in the section)",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID",
            "validation": null
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Postlist"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "postlist"
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
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}