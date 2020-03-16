export default {
    "type": "document",
    "name": "post",
    "title": "Post",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "Text that is shown just above the title",
            "validation": null
        },
        {
            "type": "image",
            "name": "content_img_path",
            "title": "Image",
            "description": "The image shown on top of the page",
            "validation": null
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Home Excerpt",
            "description": "Excerpt to be displayed in any thumbnails for the post",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "thumb_img_path",
            "title": "Alternate Image",
            "description": "image to be displayed in any thumbnails for the post",
            "validation": null
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Post Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "post"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Post URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
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
                    "page"
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