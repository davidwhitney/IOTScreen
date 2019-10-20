class ImagePlaylist {
    private entries: string[];
    private currentItem: number;

    constructor(entries:string[]) {
        this.entries = entries;
        this.currentItem = -1;
    }

    public latest(): string {
        this.currentItem++;
        if(this.currentItem >= this.entries.length) {
            this.currentItem = 0;
        }

        return this.entries[this.currentItem];
    }
}

class ImageService {
    private playlist: ImagePlaylist;

    constructor() {
        this.playlist = new ImagePlaylist([
            "red",
            "green",
            "yellow"
        ]);
    }

    public getLatestImage = () => this.playlist.latest();
}


export default ImageService;
