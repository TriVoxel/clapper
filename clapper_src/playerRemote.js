const { GObject } = imports.gi;
const { WebClient } = imports.clapper_src.webClient;

var PlayerRemote = GObject.registerClass(
class ClapperPlayerRemote extends GObject.Object
{
    _init()
    {
        super._init();

        this.webclient = new WebClient();
    }

    set_playlist(playlist)
    {
        this.webclient.sendMessage({
            action: 'set_playlist',
            value: playlist
        });
    }
});
