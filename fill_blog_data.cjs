const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data/blog.json', 'utf8'));

// Update post 2 (Motor control)
if (data.posts[1] && data.posts[1].sections.length === 0) {
  data.posts[1].sections = [
    {
      "id": 1,
      "heading": "The Evolution of EV Motor Control",
      "body": "Motor controllers are the brain of any electric vehicle. They regulate the power flowing from the battery to the electric motor, determining the vehicle's speed, acceleration, and overall efficiency. Over the past decade, we've seen a massive shift from basic analog controllers to highly sophisticated digital signal processors (DSPs).",
      "image": {
        "alt": "Advanced Motor Controller circuit board",
        "caption": "Next-generation DSP-based motor controller architecture"
      }
    },
    {
      "id": 2,
      "heading": "Why Optimized Solutions Matter",
      "body": "A generic controller might spin a motor, but an optimized controller maximizes range, minimizes heat generation, and provides a smoother ride. By precisely tuning the commutation algorithms to match the specific characteristics of your motor, you can unlock up to 15% more efficiency.",
      "benefits": [
        "Extended battery life and vehicle range",
        "Smoother acceleration profiles",
        "Enhanced thermal management",
        "Regenerative braking optimization"
      ]
    },
    {
      "id": 3,
      "heading": "Integration and Compatibility",
      "body": "Modern motor controllers must seamlessly integrate with the Vehicle Control Unit (VCU) and Battery Management System (BMS) via CAN bus communication. This allows for real-time diagnostics and advanced safety features."
    }
  ];
  data.posts[1].intro.body = "In this article, we dive deep into the critical role motor controllers play in modern EVs and how custom-tuned solutions can drastically improve vehicle performance and longevity.";
}

// Update post 3 (Axial Flux)
if (data.posts[2] && data.posts[2].sections.length === 0) {
  data.posts[2].sections = [
    {
      "id": 1,
      "heading": "Understanding Axial Flux Motors",
      "body": "Unlike traditional radial flux motors where the magnetic field moves radially (perpendicular to the axis of rotation), axial flux motors direct the magnetic field parallel to the axis of rotation. This geometry allows for a pancake-like shape that is incredibly compact and lightweight.",
      "image": {
        "alt": "Axial Flux Motor Diagram",
        "caption": "Magnetic flux path in an axial topology"
      }
    },
    {
      "id": 2,
      "heading": "The Role of Soft Magnetic Composites (SMCs)",
      "body": "One of the major challenges in axial flux motor design has been manufacturing the stator core. Traditional laminated steel is difficult to shape into the complex 3D flux paths required. This is where Soft Magnetic Composites (SMCs) come in. SMCs consist of iron powder particles coated with an electrically insulating layer, which are then pressed into complex shapes.",
      "specifications": {
        "material_type": "Soft Magnetic Composite",
        "core_loss": "Significantly lower at high frequencies",
        "manufacturing_process": "Powder metallurgy pressing",
        "3d_magnetic_properties": "Isotropic (excellent in all directions)"
      }
    },
    {
      "id": 3,
      "heading": "Unlocking Hidden Power Density",
      "body": "By utilizing SMCs, engineers can design stators that perfectly utilize the 3D magnetic flux paths inherent in axial motors. This eliminates wasted space, reduces weight, and significantly increases the overall power density of the motor, making it ideal for high-performance EVs and aerospace applications."
    }
  ];
  data.posts[2].intro.body = "We explore the revolutionary combination of Axial Flux topology and Soft Magnetic Composites, and how this synergy is creating some of the most power-dense electric motors in the world.";
}

fs.writeFileSync('./data/blog.json', JSON.stringify(data, null, 2));
console.log('Successfully added dummy sections to blog.json posts');
