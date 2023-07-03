import React from 'react';
import Head from '../Components/Head';
import Layout from './../Layout/Layout';

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to Fun Olympic Broadcast App
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                The Ancient Olympic Games were extraordinary festivals that combined religious and athletic traditions and took place every four years at the sanctuary of Zeus in Olympia, Greece. These games brought together representatives from various city-states and kingdoms of Ancient Greece to compete in a range of sports, including athletics, combat sports like wrestling and pankration, and horse and chariot racing. It is widely believed that during the Games, conflicts between participating city-states were put on hold until the event concluded. This period of temporary peace, known as the Olympic peace or truce, allowed religious pilgrims traveling to Olympia to pass through war-torn territories without harm, as they were under the protection of Zeus. However, it is important to note that this idea of complete cessation of hostilities is a modern myth, as the Greeks did not completely suspend their wars during the Games. Nevertheless, the Olympic truce provided a sanctuary for athletes and pilgrims and showcased the significance of religion and sport in ancient Greek society.
                </p>
                <p>
                These games brought together representatives from various city-states and kingdoms of Ancient Greece to compete in a range of sports, including athletics, combat sports like wrestling and pankration, and horse and chariot racing. It is widely believed that during the Games, conflicts between participating city-states were put on hold until the event concluded. This period of temporary peace, known as the Olympic peace or truce, allowed religious pilgrims traveling to Olympia to pass through war-torn territories without harm, as they were under the protection of Zeus
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">4K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Videos</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Fun Olympic Games
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">1K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Fun Olympic Games
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/about2.jpg"
              alt="aboutus"
              className="w-full xl:block hidden h-header rounded-lg"
              style={{ height: '100%', objectFit: 'cover' }}
            />
            
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
