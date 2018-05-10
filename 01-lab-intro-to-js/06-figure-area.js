function figureArea(w, h, W, H) {
    let firstArea = w * h;

    let secondArea = W * H;

    let overlapArea = Math.min(w, W) * Math.min(h, H);

    let totalArea = firstArea + secondArea - overlapArea;

    return totalArea;
}