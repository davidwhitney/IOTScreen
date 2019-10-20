export default class ImagePlaylist {
    private entries: string[];
    private idx: number;
    rotationMs: number;
    rotateAt: Date;

    constructor(rotationMs: number, entries:string[]) {
        this.rotationMs = rotationMs;
        this.entries = entries;
        this.idx = 0;
        this.updateRotationTime();
    }

    public latest(): string {
        if(new Date(Date.now()) > this.rotateAt) {
            this.updateRotationTime();
            this.idx++;
            this.idx = this.idx >= this.entries.length ? this.idx = 0 : this.idx;
        }

        return this.entries[this.idx];
    }

    private updateRotationTime(): void {
        this.rotateAt = new Date(Date.now() + this.rotationMs);
    }
}