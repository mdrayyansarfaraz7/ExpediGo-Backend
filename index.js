import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

const port=8080;
app.use(cors({
    origin: 'http://localhost:5173', 
  }));
  app.use(express.json());

const international=[{
    destination: "Bhutan",
    location:"Thimphu, Bhutan",
    url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Fbhutan.avif?alt=media&token=a02af3e6-790d-45a5-b2a4-9c3bf5581cf0",
    price: 9999
},
{
    destination: "Dubai",
    location:"Al Fahidi - Dubai - United Arab Emirates",
    url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FDubai.jpg?alt=media&token=ce5341f0-1ada-40a8-9ea6-7294f1c1798b",
    price: 12999
},
{
    destination: "Vietnam",
    location:"Hạ Long, Vietnam",
    url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Fvietnam.jpeg?alt=media&token=c3afab32-6aa7-493e-9178-cbb7040a5331",
    price: 8999
},
{
    destination: "Baku",
    location:"Baku, Azerbaijan",
    url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Fbaku.avif?alt=media&token=750ce34c-481c-43c1-a0f5-c535ac510cb1",
    price: 9999
},
{
    destination: "Thailand",
    location:"Bangkok, Thailand",
    url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FThailand.avif?alt=media&token=bf8ba3e8-fdce-4696-a8f4-1fbc1a716104",
    price: 8499
},
{
    destination: "Nepal",
    location:"Annapurna, Narchyang, Nepal",
    url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Fnepal.avif?alt=media&token=4cd74849-8b47-4f76-824e-3d4d9f8be3dd",
    price: 6999
}];

const india = [
    {
      destination: "Sikkim",
      location: "Gangtok, Sikkim, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FSikkim.jpg?alt=media&token=c2a3e9a4-3fc6-4cc6-833e-542f57780b21",
      price: 12000
    },
    {
      destination: "Assam",
      location: "Guwahati, Assam, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FAssam.jpg?alt=media&token=78bff552-749c-4f30-9a97-fffb211164a9",
      price: 10000
    },
    {
      destination: "Goa",
      location: "Goa, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FGoa.jpg?alt=media&token=5912fda9-e5ec-460a-a4bb-5da7fb89a5ce",
      price: 8000
    },
    {
      destination: "Kolkata",
      location: "Kolkata, West Bengal, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FKolkata.jpg?alt=media&token=5b4d5a9e-bcb1-4d84-aab5-b9ea451d851a",
      price: 9500
    },
    {
      destination: "Uttarakhand",
      location: "Dehradun, Uttarakhand, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FUttarakhand.jpg?alt=media&token=2f1fb876-d1bd-4ebb-b48e-8a85c938114a",
      price: 14000
    },
    {
      destination: "North-East India",
      location: "Various locations in North-East India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FNorth%20East.jpg?alt=media&token=22c89ada-9902-4fd3-97c5-d964c30d3b9c",
      price: 18000
    },
    {
      destination: "Darjeeling",
      location: "Darjeeling, West Bengal, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FDarjeeling.jpg?alt=media&token=48d98e3a-65a4-4dd3-a9db-1cf62cfcccc2",
      price: 11000
    },
    {
      destination: "Silk Route",
      location: "Silk Route, East Sikkim, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Fsilk.jpg?alt=media&token=3fec5240-0998-4c65-a0dd-a69c4dc8764b",
      price: 9000
    },

    {
      destination: "Himachal",
      location: "Shimla, Himachal Pradesh, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FHimachal.jpg?alt=media&token=6c6fd45d-2fc6-4dc6-9a3e-c8d12d20f2ce",
      price: 13000
    },
    {
      destination: "Arunachal",
      location: "Itanagar, Arunachal Pradesh, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Farunanchal.jpeg?alt=media&token=1bf2ce10-33ea-4525-b275-607da5f16381",
      price: 15000
    },
  ];
  
  const Package = [
    {
      destination: "Sundarban Mangroves",
      location: "Sundarbans, West Bengal, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FSundarbuns.jpg?alt=media&token=a6e06af6-b681-4d1f-99ee-5c63d977ec71",
      price: 12000,
      package: 5
    },
    {
      destination: "Shantiniketan",
      location: "Shantiniketan, West Bengal, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Fshantinekitan.jpg?alt=media&token=488acf0c-7264-4656-afa7-7e8a0a86f88b",
      price: 8500,
      package: 6
    },
    {
      destination: "Darjeeling",
      location: "Darjeeling, West Bengal, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FDarjeeling.jpg?alt=media&token=6af51cb0-8c14-4a88-ab49-aa1bf6e43940",
      price: 11000,
      package: 7
    },
    {
      destination: "Sikkim",
      location: "Gangtok, Sikkim, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FSikkim.jpg?alt=media&token=c2a3e9a4-3fc6-4cc6-833e-542f57780b21",
      price: 12000,
      package: 8
    },
    {
      destination: "North/South Goa",
      location: "Goa, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FGoa.jpg?alt=media&token=5912fda9-e5ec-460a-a4bb-5da7fb89a5ce",
      price: 8000,
      package: 5
    },
    {
      destination: "Guwahati, Assam",
      location: "Guwahati, Assam, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2Fgawhati.jpg?alt=media&token=444bda33-6bda-4a98-a944-e909b9623af4",
      price: 10000,
      package: 6
    },
    {
      destination: "North-East India",
      location: "Various locations in North-East India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FNorth%20East.jpg?alt=media&token=22c89ada-9902-4fd3-97c5-d964c30d3b9c",
      price: 18000,
      package: 7
    },
    {
      destination: "Kolkata",
      location: "Kolkata, West Bengal, India",
      url: "https://firebasestorage.googleapis.com/v0/b/botanicalbliss-6e21d.appspot.com/o/ExpediGo%20Images%2FKolkata.jpg?alt=media&token=5b4d5a9e-bcb1-4d84-aab5-b9ea451d851a",
      price: 9500,
      package: 8
    }
  ];
  

app.get('/international',(req,res)=>{
    res.json(international);
});

app.get('/india',(req,res)=>{
    res.json(india);
})

app.get('/packages',(req,res)=>{
    res.json(Package);
})

app.post('/enquire', async (req, res) => {
  const formData = req.body;
  if (!formData.email || !formData.phone) {
    return res.status(400).json({ error: 'Email and phone number are required' });
  }

  console.log('Enquiry received:', formData);

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'mdrayyansarfaraz@gmail.com', 
    subject: 'New Enquiry from ExpediGo Website',
    text: `
      New enquiry received!
      Client's Name: ${formData.name}
      Destination: ${formData.destination}
      Travel Dates: From ${formData.from} To ${formData.to}
      Type of Trip: ${formData.typeOfTrip}
      Client-Email: ${formData.email}
      Contact-Phone: ${formData.phone}
    `,
  };

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.APP_PASSWORD, 
      },
    });
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Your enquiry has been submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send enquiry email' });
  }
});

app.listen(port,()=>{
    console.log('listening to port 8080');
})