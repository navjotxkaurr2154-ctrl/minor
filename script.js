// Initialize Panellum Viewer
var viewer = pannellum.viewer('panorama', {
  default: {
    firstScene: 'enterance',
    sceneFadeDuration: 1000,
    autoLoad: true
  },

  scenes: {
    enterance: {
      title: "Enterance",
      panorama: "images/enterance.jpg",
      
      
      pitch: 0,
      yaw: 1000,
        hfov: 110,
      hotSpots: [
        {
          pitch: -10,
          yaw: 210,
          type: "scene",
          text: "Go to reception",
          sceneId: "reception"
        }
      ]
    },

    reception: {
      title: "reception",
      panorama: "images/reception.jpg",
      

      pitch: 0,
      yaw: 1000,
      hotSpots: [
        {
          pitch: 0,
          yaw: 230,
          type: "scene",
          text: "Go to Stairs",
          sceneId: "stairs"
        },
        {
          pitch: 0,
          yaw: 400,
          type: "scene",
          text: "Back to Enterance",
          sceneId: "enterance"
        }
      ]
    },

    stairs: {
      title: "Stairs",
      panorama: "images/stairs.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 0,
          type: "scene",
          text: "Go to Upper Floor",
          sceneId: "upper_floor"
        }
        ]
        },
        upper_floor: {
             title: "Upper Floor",
      panorama: "images/upper_floor.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 0,
          type: "scene",
          text: "Go to Corridor",
          sceneId: "corridor"
        }
    ]
},
        corridor: {
             title: "Corridor",
      panorama: "images/corridor.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 0,
          type: "scene",
          text: "Go to Seminar Hall",
          sceneId: "seminar_hall"
        },
        {
          pitch: 0,
          yaw: -15,
          type: "scene",
          text: "Go to computer lab",
          sceneId: "computer_lab"
        },
         {
          pitch: 0,
          yaw: -5,
          type: "scene",
          text: "Go to corridor 2",
          sceneId: "corridor_2"
        }
    ]
},
            seminar_hall: {
             title: "Seminar Hall",
      panorama: "images/seminar_hall.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 500,
          type: "scene",
          text: "Back to corridor",
          sceneId: "corridor"
        }
      ]  
},
             computer_lab: {
             title: "Computer Lab",
      panorama: "images/computer_lab.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 500,
          type: "scene",
          text: "Back to corridor",
          sceneId: "corridor"
        }
      ]  
 },
 corridor_2: {
             title: "Corridor 2",
      panorama: "images/corridor_2.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 100,
          type: "scene",
          text: "Go to Indian Angeethi",
          sceneId: "indian_angeethi"
        },
        {
          pitch: 0,
          yaw: -50,
          type: "scene",
          text: "Go to Kitchen",
          sceneId: "kitchen"
        },
         {
          pitch: 0,
          yaw: -300,
          type: "scene",
          text: "Go to classroom",
          sceneId: "classroom"
        },
         {
          pitch: 0,
          yaw: -150,
          type: "scene",
          text: "Go to second floor",
          sceneId: "second_floor"
        }
      ]  
},
indian_angeethi: {
             title: "Indian Angeethi",
      panorama: "images/indian_angeethi.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 500,
          type: "scene",
          text: "Back to corridor 2",
          sceneId: "corridor_2"
        }
      ]  
},
classroom: {
             title: "Classroom",
      panorama: "images/classroom.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 500,
          type: "scene",
          text: "Back to corridor 2",
          sceneId: "corridor_2"
        }
      ]  
},
kitchen: {
             title: "Kitchen",
      panorama: "images/kitchen.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 500,
          type: "scene",
          text: "Back to corridor 2",
          sceneId: "corridor_2"
        }
      ]  
},
second_floor: {
             title: "Second Floor",
      panorama: "images/second_floor.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 0,
          type: "scene",
          text: "Go to Faculty cabin",
          sceneId: "faculty"
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "Go to Bakery",
          sceneId: "bakery"
        },
          {
          pitch: 0,
          yaw: 100,
          type: "scene",
          text: "Back to reception",
          sceneId: "reception"
        }
      ]  
},
faculty: {
             title: "Faculty cabin",
      panorama: "images/faculty.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 500,
          type: "scene",
          text: "Back to second floor",
          sceneId: "second_floor"
        }
      ]  
},
bakery: {
             title: "Bakery",
      panorama: "images/bakery.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 500,
          type: "scene",
          text: "Back to second floor",
          sceneId: "second_floor"
        }
      ]  
},

  }
}
);
