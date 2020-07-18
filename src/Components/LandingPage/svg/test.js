var makerjs = require('makerjs');

function demo(left_radius, distance_between_centers, right_radius) {

  this.models = {
    example: new makerjs.models.Belt(left_radius, distance_between_centers, right_radius)
  };

}

demo.metaParameters = [
  { title: "left radius", type: "range", min: 0, max: 100, value: 30 },
  { title: "distance between centers", type: "range", min: 0, max: 100, value: 50 },
  { title: "right radius", type: "range", min: 0, max: 100, value: 15 }
];

module.exports = demo;
