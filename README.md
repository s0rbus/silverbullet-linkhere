
# SilverBullet plug for creating a link at cursor position

Captures page name and cursor position temporarily so that on some other page a link to that place can be created.

## Wait, SilverBullet?

If you don't know what it is, check its [webpage](https://silverbullet.md), but if
you want me to spoil the fun: it is an extensible note taking app with markdown and plain files at its core
(well... there is a bit of magic in there too, but what good it would be without a little magic?)

## Usage
If you want to have a link to a specific position on a page, plcae your cursor at that place and run command "Get reference to current page/position". This will capture the page and cursor position and will prompt you for an optional alias for the link.

Then go to the page where you want to insert the link and run the command "Insert link to reference previously captured" and a link (with the alias if provided) will be inserted.

## Installation
Open (`cmd+k`) your `PLUGS` note in SilverBullet and add this plug to the list:

```yaml
- https://github.com/s0rbus/silverbullet-linkhere/releases/download/v0.1.0/silverbullet-linkhere.plug.json
```

Then run the `Plugs: Update` command and off you go!

