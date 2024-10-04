import React from 'react';
import './App.css';
import client1Image from './img/client1.jpeg';
import client2Image from './img/client2.jpeg';
import client3Image from './img/client3.jpeg';
import client4Image from './img/client4.jpeg';

const clients = [
    {
        name: 'Khushi kumari',
        image: client1Image,
        description: "Great Employer, Good communication, Quick Feedback on the revisions",
    },
    {
        name: 'Vishu@k',
        image: client2Image,
        description: "You're the Best. I wish you all the success in the world",
    },
    {
        name: "Ravish Singh",
        image: client3Image,
        description: "Great client. Love the project, so it's hard not to have fun with it",
    },
    {
        name: 'Manish Patel',
        image: client4Image,
        description: "Easy to work with and clear about what he wanted. Would definitely work with him again",
    }
];

const ClientSection = () => {
    return (
        <section className="client-section">
            <h2>Testimonials</h2>
            <div className="client-slider">
                {clients.map((client, index) => (
                    <div className="client-card" key={index}>
                        <img src={client.image} alt={`${client.name}`} />
                        <h3>{client.name}</h3>
                        <p>{client.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientSection;


