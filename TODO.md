# TODO

[ ] Add link to github on Repo pages header
[ ] Add support for `githublanding.json` file that allows projects to customize the homepage
[ ] Add simple landing page builder that customizes `githublanding.json` and good looking sections

Example:

```json
{
  "showReadmeContent": true,
  "sections": [
    {
      "type": "Hero",
      "src": "https://example.com/img.png",
      "text": "This is the hero image!"
    },
    {
      "type": "Features",
      "features": [
        {
          "title": "Feature 1",
          "description": "",
          "src": ""
        }
      ]
    }
  ]
}
```
