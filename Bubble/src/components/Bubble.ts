/// <reference types="@types/google.maps" />

// Custom overlay
export class Bubble extends google.maps.OverlayView {
  private msg: string;
  private loc: google.maps.LatLng;
  private div: HTMLElement | null = null;

  constructor(msg: string, lat: number, lng: number) {
    super();
    this.msg = msg;
    this.loc = new google.maps.LatLng(lat, lng);
  }

  onAdd(): void {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    
    const img = document.createElement('img');
    img.src = 'assets/bubble.png';
    img.style.width = '100%';

    const msgDiv = document.createElement('div');
    msgDiv.innerText = this.msg;
    msgDiv.style.position = 'absolute';
    msgDiv.style.top = '0';
    msgDiv.style.left = '0';
    msgDiv.style.width = '100%';
    msgDiv.style.color = 'black';
    msgDiv.style.textAlign = 'center';
    msgDiv.style.fontSize = '16px';
    msgDiv.style.padding = '10px';

    div.appendChild(img);
    div.appendChild(msgDiv);
    
    this.div = div;

    const panes = this.getPanes();
    if (panes) {
      panes.overlayLayer.appendChild(div);
    }
  }

  draw(): void {
    if (!this.div) return;
    
    const overlayProjection = this.getProjection();
    const position = this.loc
    const point = overlayProjection.fromLatLngToDivPixel(position);

    if (point) {
      this.div.style.left = `${point.x}px`;
      this.div.style.top = `${point.y}px`;
    }
  }

  onRemove(): void {
    if (this.div) {
      if (this.div.parentNode) {
        this.div.parentNode.removeChild(this.div);
      }
      this.div = null;
    }
  }
}