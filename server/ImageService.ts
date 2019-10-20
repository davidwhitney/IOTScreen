import ImagePlaylist from "./ImagePlaylist";

export default class ImageService {
    private playlist: ImagePlaylist;

    constructor() {
        this.playlist = new ImagePlaylist(5000, [
            "red",
            "green",
            "yellow"
        ]);
    }

    public getLatestImage = () => this.playlist.latest();
}