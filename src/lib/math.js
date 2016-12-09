/**
 * Distance between two points
 * @param  {Object} first  {x1, y1}
 * @param  {Object} second {x2, y2}
 * @return {Number}        the distance between them
 */
export function distance(first, second) {
  return Math.sqrt(Math.pow(second.x - first.x,2) + Math.pow(second.y - first.y,2));
}

/**
 * distance to the base
 * @param  {Object} rover position of rover {x, y}
 * @return {Number}       distance from the base
 */
export function distanceToBase(rover) {
  return distance(rover, {
    x: 200,
    y: 200
  });
}
