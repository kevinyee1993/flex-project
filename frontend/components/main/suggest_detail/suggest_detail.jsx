import React from 'react';
import * as rb from 'react-bootstrap';
import PhotoCarousel from './photo_carousel';
import SuggestInfo from './suggest_info';
import ActionSidebar from './action_sidebar';
import SuggestCarousel from '../suggest_index/suggest_carousel';

class SuggestDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // dummy data for suggest_detail
  const dummy_data =   {
        "_id": {
            "$oid": "5ae5b5f3659c3f00dee33ea0"
        },
        "name": "The Metro Hotel",
        "numReviews": 177,
        "address": "319 Divisadero St San Francisco, CA 94117",
        "phone": "(415) 861-5364",
        "tags": "Hotels",
        "rating": "4.5",
        "price": 1,
        "image": "https://s3-media3.fl.yelpcdn.com/bphoto/igFMEiB9GjbcUJHOUjxvZg/90s.jpg",
        "link": "https://www.yelp.com//biz/the-metro-hotel-san-francisco?osq=hostels",
        "ownerDesc": "Providing a clean, safe hostel environment with character. With our diverse group of guests and free meals and events, we are San Francisco's official party hostel! Providing a clean, safe hostel environment with character. With our diverse group of guests and free meals and events, we are San Francisco's official party hostel! Established in 1994. Opened  on the heels of the Green Tortoise in Seattle, WA.  Under the long shadow of the Green Tortoise Adventure Travel Company (located within our same building).   Chinatown continues to defy the ages just one block away.  The Green Tortoise Hostel is found in North beach on the same block where Carol Doda made history with the first of the topless,  \"girlie\" shows.     And where the Beat Generation cut their teeth  (The  Beat Museum is right next door). Like Jack Keorac,  the legendary Green Tortoise was inspired by cross country, overland, road trips.  Expanding to destinations in National Parks near and far.  We specialize in giving travelers the platform to interact and tell their storiesOnce Vanessi's and before that Fior D'Italia, our Broadway location was built after the 1906 earthquake - you will admire some of the fine details preserved in the International Ballroom.",
        "neighborhood": "North Beach/Telegraph Hill",
        "reviews": [
            {
                "username": "",
                "review": "",
                "profilepic": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/b5b7ea174ecb/writeareview/empty_profile.png"
            },
            {
                "username": "Noueman H.",
                "review": "Dear St. Regis Hotel,Thank you for my incredible stay recently. You provided me with a terrific room -- extremely comfy bed, beautiful bathroom (deep bathtub, separate shower encased in frosted glass), precise climate control, nifty automatic blinds and sheer shades, and a great view of SoMa. You pampered me with your relentlessly courteous and friendly service. Everyone I encountered was warm and welcoming. I enjoyed your fitness center and used it quite a bit. I didn't try out your infinity pool (I'm not a big swimmer) but it sure looked tempting. I liked the spa although I had one comment - the noise from the street (honking horns, etc.) was noticeably loud, which didn't make the experience very relaxing. I didn't see any windows so I wonder if there is some way to better sound proof the rooms? It's hard to find fault after being offered healthy snacks and sparkling wine.Your location was very convenient - next to SF MOMA and Yerba Buerna. Even though there are many other great parts of the city, it feels like you're in the center of everything. It was stunning to see all the exotic cars pull up into the driveway on Minna Street. Before I got there, I had no doubt you would live up to your global brand and the accompanying five-star reputation. Overall, you did just that.",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"
            },
            {
                "username": "Tina C.",
                "review": "St. Regis properties offer elegant, attentive stay experiences across the world, and the San Francisco hotel absolutely meets this high standard. Visited the St. Regis for a professional program and enjoyed the refined modern environment, discreetly focused service, and excellent meeting facilities. FACILITIES (4.5/5)Our program took place across a 300-person second floor ballroom and third and fourth floor meeting rooms which were modern, upscale and comfortable. The evening reception was hosted at the airy outdoor Yerba Buena terrace. FOOD (4/5)Breakfast was served buffet style, with two buffet lines and an army of staff to ensure easy efficiency. Mini pastries and muffins, fresh fruit, mini vegetable frittatas, bacon, sausage, breakfast potatoes, and other egg dishes were on hand along with coffee/tea, orange and grapefruit juice, and water stations. Lunch was also buffet: roast chicken (quite good!), salmon, salad, vegetables, and a delightful dessert station including a mini local huckleberry tart bursting with explosive fruit flavor. The reception cheese board and wine was excellent. SERVICE (4.5/5)Attentive, friendly, well-run operation! Thank you to the staff for their directions through the hotel and offers to help. I look forward to hosting events and staying at St. Regis San Francisco!",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/-s7d4EiiUwD4nScRtnnUTg/300s.jpg"
            },
            {
                "username": "Kasey R.",
                "review": "Great venue for a business conference and to host meetings. Rooms are spacious and modern. Location:Good location next to restaurants and in the financial district. Close to Bay Bridge. About 6 miles from the Golden Gate Bridge Food: amazing! Service is good.Enjoy!",
                "profilepic": "https://s3-media3.fl.yelpcdn.com/photo/K2aoBWhF2xbOu6ExGnyFSw/300s.jpg"
            },
            {
                "username": "Andi H.",
                "review": "My husband works at St.Regis, I was trying to call him & the staff there gave me the run around. I was transferred several times on the phone. The staff said he didn't work there, which I knew for sure, he did! A guy with an accent was very rude to me, he would not give me his name. He said he would block my number. This type of service does not reflect well for a 4 star hotel, which St. Regis claims they are!!!! I was on the verge of tears & still was not able to contact my husband. Please train your staff at better customer service when it comes to phone conversations! The manager needs to be held responsible for un professional staff, especially the guy who refused to give me his name & threatened to block my calls. Extremely rude!! From a VERY upset wife!!",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"
            },
            {
                "username": "Jessica W.",
                "review": "Stayed here on a mini vacation/ work trip weekend. It was great!! The hotel is right next to the MOMA, in the financial district. Service here is always impeccable. Everyone goes out of their way to make it a great experience. We stayed in a corner room, not a suite but definitelyBetter than a regular room.We had drinks at the bar downstairs, the bartender made a delicious tequila cocktail off menu. It had jalepeno, citrus, and I believe a little agave. It was delightful and I wish I had asked how to make it. We ate at the grill one morning, they made lovely lattes. We also had frittata, definitely was not good. It tasted like hotel food but that's a review for the restaurant. Valet parking is 60/ day just be mindful of that!! Definitely a pricey place to stay but was a good time.",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/oNPhxBxTAFbr0Ma2am98Dw/300s.jpg"
            },
            {
                "username": "Katie G.",
                "review": "Just had an amazing family vacation here. The staff and service is top of the line amazing and the reason to pay a little extra to stay here. Our children (ages 1,5,7) felt so special being given a stuffed animal upon check-in, then later little coloring packets and a puzzle. In the bathroom was a little baby bathroom kit with baby wash, etc which was just one more unexpected thing to appreciate when traveling. They really do not miss a beat. The rooms are beautiful and the location is great. Will definitely be back :)",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"
            },
            {
                "username": "Bryan M.",
                "review": "Staying downtown in style for two nights. A classy hotel and a wonderful room. During our stay we had excellent service from a wonderful staff. A hotel with evening turn-down service is an extra bit of luxury I love. Coming back after a long day of travel and fun I'm exhausted and ready to unwind for the night. Each night, we'd come back, the Bose Wave music system was playing some smooth jazz, lights dimmed, shades drawn, and night garments laid out. The St Regis was a nice two-day splurge and I throughly enjoyed myself.",
                "profilepic": "https://s3-media3.fl.yelpcdn.com/photo/JLZeuLJxvakI5tii2mhqTg/300s.jpg"
            },
            {
                "username": "Amanda M.",
                "review": "Hands down my new favorite place to stay in SF. Everyone who worked there was amazing. We Arrived late but walked into our amazing room to an amazing fresh flower arrangement and chocolate covered strawberries. Pure heaven!  Can not wait to go back!!",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/xdHd-Gpq-rNPuq9Ff1Hijg/300s.jpg"
            },
            {
                "username": "Hutch C.",
                "review": "Over the top service makes this 5 stars.  Took my boys for (ages 7 and 10) to SF for our annual pre-Christmas boys night.  Not the busiest time of year, and I am pretty sure there were a few families in from the burbs to enjoy the holidays in the city.  We were heading to an early viewing of Star Wars, and they let us check-in @ 930 (am that is).  I wish I could remember the woman from the front desk, because she got this trip started right by offering the boys hot chocolate.  We also got cookies and milk delivered to the room.  Boys enjoyed the indoor pool, but missed the hot-tub (the palace which is our usual venue has one).  Room was great, but the service is what makes this place special.",
                "profilepic": "https://s3-media3.fl.yelpcdn.com/photo/ztfFnek72_shpzOiT-T-Gw/300s.jpg"
            },
            {
                "username": "Brad M.",
                "review": "Don't get me wrong this is a nice hotel. I don't think it's on the same level as the four seasons or Ritz Carlton. The rooms are nice replicate a good Western will tell. The service is good but nothing extraordinary. The workout facilities are normal but nice. I think the park central is a better bargain for what you get very similar if you can afford this place I want to stay in this brand sure won't disappoint.",
                "profilepic": "https://s3-media3.fl.yelpcdn.com/photo/yD9CxcGCOyv-Sf_WkYJ-Gw/300s.jpg"
            },
            {
                "username": "Norm J.",
                "review": "If you are going to visit San Francisco, you can't go wrong with staying at The St. Regis Hotel. The customer service alone is worthy of 5 stars. Every time I stay here I feel like royalty! The customer service that you receive here is exceptional; especially the butler service and access to the Bentley. I was fortunate enough to stay in one of the suites and it was glorious in every way imaginable. Some highlights included the bed which was like sleeping on clouds...not that I've ever slept on a cloud and the jacuzzi tub was relaxing to the tenth power.The St. Regis location is also great as it's close to the convention center, shopping on Market Street and in Union Square and the Bart that can get you to other areas such as the pier.",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/8_xDW9az6C99TAMJ-5jDxg/300s.jpg"
            },
            {
                "username": "Suki K.",
                "review": "My first stay at the St. Regis San Francisco. The hotel is pleasantly adorned with modern décor with slick lines like other Starwood hotels are. St Regis is located in the heart of the financial district making it incredibly convenient to get around...Uber is always available in a couple of minutes...or you can ride in the house car.Their fitness center is well equipped with cardio, weight machines, and they also have a space for stretches if you prefer.The spa is convenient  and well worth the price and time needed to get services. I was impressed with all the skilled and professional service providers. Every area your eyes land there is beautiful artwork...so effortless for us to enjoy while we walked throughout the St. Regis San Francisco.Special thanks to the bellmen...the very front of the house staff was ideal. They remembered our names and greeted us with sincerity.Only thing I was puzzled by was how incredibly small their closet space is...pack light for your stay here, like any other good traveler, or plan to live out of your suitcase.",
                "profilepic": "https://s3-media1.fl.yelpcdn.com/photo/4PAqtIr2Te3bu6_p8QE8qA/300s.jpg"
            },
            {
                "username": "Rick L.",
                "review": "My family and I stayed at the St. Regis San Francisco in December 2016; it was a perfect stay.  From the car valet, to bellmen, to front desk staff -- it was a perfect display of 5-star customer service through and through.  The security, staff, too, was perfect .  All these personnel have a tough 24/7 job of delivering top flight customer service to highly demanding (if not snooty) customers.  The St. Regis staff delivered A+ service with grace.  While it's a bit pricey (and not a hotel that I'd typically choose, because I'm fundamentally cheap), if you have a special occasion and want to experience St. Regis at its best, you won't go wrong here!",
                "profilepic": "https://s3-media1.fl.yelpcdn.com/photo/3TfB9XTLGj-ETvNJiu4Lyg/300s.jpg"
            },
            {
                "username": "Dilys S.",
                "review": "Amazing proximity to the SFMOMA in fact you can even get a MOMA package staying here with prepurchased tickets and all. The Spa is amazing and reasonable. It's more relaxing than Bliss. The rooms are really well designed, modern yet elegant. Watch out lower floors do sound noisier because of the busy downtown streets below. Walking distance to the Yerba Buena garden, downtown shopping, and the lobby bar and food is quite good too for staying in. The butler service is not available to common rooms. Even in suites the butlers have off times during holidays so one thing to watch out. It's more about the downtown access and overall amenity than the butler service in this St Regis",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/XCS8WQwinmjEkiZ6aNOzug/300s.jpg"
            },
            {
                "username": "Kobby C.",
                "review": "The best hotel ever! Best staff hands down!Now my wife and I cannot stay at any other hotel. Wow!",
                "profilepic": "https://s3-media1.fl.yelpcdn.com/photo/vwuvjJDRf5aaURMdQ7LMNQ/300s.jpg"
            },
            {
                "username": "Jackie W.",
                "review": "An overall excellent stay. This hotel is kept immaculate, rooms are spacious and well-equipped and service is extremely friendly. I was traveling for work, so the room was quite central to my office, but also to the Yerba Buena restaurant area. -Rooms - Upon check-in, they put us on a higher, quieter floor after seeing we were traveling with our baby. The room was quite large, has a super plush and comfortable bed, and a fair bit of space to move around. Temperature was also easy to control and worked well. We had a bunch of our daughter's stuff with us too, and found there was a great deal of space to store everything. -Service - From check-in to check-out, the front desk was great. They saw we checked in with our seven month old, and immediately brought out a little stuffed animal for her. Every time we walked in, they were super sweet to her. I also needed a place to store her pumped milk, and while there is a wine refrigerator in the room, when I called, they put a mini fridge in the room with a small freezer and a microwave to sanitize. They did this as soon as I called (during the workday). Made my life so much easier and they were so nice about it.-General Accommodation - My husband used the gym and found it good. He really loved the salt water pool. I visited and thought it was fine, but he thought this was a very nice amenity.A note that parking is not cheap, but there are other cheaper garages nearby if you have a bit of patience.We'll be staying here each time we visit SF!",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/sFe0N9MWqu_bcehe1mDsYA/300s.jpg"
            },
            {
                "username": "Tina C.",
                "review": "Excellent Service + Great LocationMy family of four including 2 toddlers traveled to SF for work and a family wedding. We selected this hotel because of its location, heated indoor pool for the kids, and adjourning bedrooms. We were not disappointed. The staff is very welcoming and friendly. At check-in, my toddlers were given teddy bears to keep them company during their stay. Super cute! Service is excellent. The gym and spa are both small and pretty standard. TIPs.- If you're traveling with family and need more than 1 bedroom, ask for adjourning bedrooms.- The suites do not have kitchens, but they'll provide a microwave upon request.",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/LNGaOK9ZtFEEBGitYB9Vnw/300s.jpg"
            },
            {
                "username": "Sierra Z.",
                "review": "This one star reflects the changes post Marriot take over. Previously I considered the St. Regis my home away from home. I will not be back. Luxury does not equate being treated like a prostitute (more power to you ladies) simply for being a single woman alone. I would hope that in San Francisco, of all places, a woman would be safe from such assumptions. Not a place for women, queer individuals, or minorities.I will not spend another cent there. I encourage any open minded, kind, intelligent person to find an alternative hotel where all guests are treated with equal respect and consideration.",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/aWARHBNZsdjd18L2wm4N8Q/300s.jpg"
            },
            {
                "username": "Shelley B.",
                "review": "Bloody Mary Review - No matter what city you may find yourself in, you cannot go wrong with a St. Regis bloody mary. At this San Francisco locale, you'll find the classic St. Regis Red Snapper with Belvedere vodka alongside three other bloody variations, including the Mardavall Pepper Snapper with Nolet's gin, The Golden Gate Mary with chili-infused tomato water, and the Bloody Brunello with grappa and honey. Why go? Options. | Price: $15",
                "profilepic": "https://s3-media1.fl.yelpcdn.com/photo/6vBD5rfVZzEzL0QQCcyEdQ/300s.jpg"
            },
            {
                "username": "Steffi G.",
                "review": "This review is for their restaurant, GRILL. I can't find it here on Yelp.We crashed our friend's family dinner after we got drinks at the lobby bar in the St. Regis. We got a table in the back of the restaurant. It took a while for us to get our food, but I understand it's because they waited until ALL of the orders were made to serve us our orders.The waiters came individually to show us their bread selection, sliced us two pieces each. They also gave us complimentary appetizers. I forgot the name of it, but it was mixed chopped veggies with some curry-like spice (tumeric? cumin? idk) and deep fried. I didn't like it very much. My boyfriend and I just got burgers with their hand cut fries. The fries were pretty good. A little salty, but crispy at the ends, which I like. I liked their burger. Cheesy, the meat was cooked to my liking, but just a bit greasy. My boyfriend wasn't much of a fan of it, though. He said it's only \"okay.\"At the end of our meal, we were stuffed so no one order desserts. They brought us complimentary small pieces of sweets to munch on. One was kahlua infused milk chocolate truffles and some strawberry cube thing covered with sugar. It tasted like extra sweet strawberry jam. I liked it! The chocolate was pretty good too. I didn't taste the kahlua.Overall, the service there is outstanding. I had to go to the restroom, and to my surprise, one of the waiters walked me out of the restaurant just to show me where the restroom was. Whenever I got up from my seat (which I did many many times), I would come back with my table napkin folded back neatly. One of the times I came back, our waiter pulled out my chair for me. I was like (in my head, of course), \"Uh sir, that's my seat.\" hahahaha.It was a nice experience. I wouldn't mind coming back. Curious to try out their steaks and salmon.",
                "profilepic": "https://s3-media2.fl.yelpcdn.com/photo/8OVnAl_LP35YoEf24BZz7w/300s.jpg"
            }
        ],
        "images": [
            "https://s3-media4.fl.yelpcdn.com/bphoto/igFMEiB9GjbcUJHOUjxvZg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/igFMEiB9GjbcUJHOUjxvZg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/KGiAB55zqcyQnDH-b-sE-Q/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/2Qa6VRUuEzk4pE0TgT0Sqw/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/pJY31_GUgxdDphWyFICYsQ/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/JRhZOsxCyyzN4UwzXWRpxw/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/k9QV9j3L6pVincLw8teb3w/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/D48m9QGzUi6xmsF1tF6D_g/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/m0SKArg_nkGMN80fHsihRw/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/JlZ2XYB0JCtp7Tj1yJw98Q/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/bMM5Ou1uJXFtFEnxweeErg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/ARCQi5DcPKahE7-q0p3jYA/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/NbHTiQ0ETk9MuhzVKbx_IQ/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/nK6N91JUM67tdCn-7gR4vg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/vdCw5p9lCTiQGUBsmdLKtw/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/5tIJybYEZLYFzv7rjde_0Q/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/4TZ40SZhhFL-ONWDtUwtZA/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/gqSoHpH3bTgz1yTTCxHgrw/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/XF5cSOrOGQsFAw6acBWQLg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/0IHA6KONakblHTlX0YDBYA/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/CHfHPyhgxUt3u5Gq6LvkfQ/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/DjepAC2JNoQ7bXHEfs-bwQ/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/KEYpIOVETlloCo7LY4EGtg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/XPpZOr4x8MCjRRJga9xCBA/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/Efo57e2Pp7yqBpjgamB7qQ/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/inHWPtWNIbSCznb3AcJIVQ/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/lgaDHRSezjmCm3zr7eaTqg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/wdQgmj73oaFrHuoWoLJlOg/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/oyUhh9DWdaKOMjF41xpwWA/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/ESQOK6DI54m-_s7ZWnUA1Q/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/EvMiCwLQWIweaqP3xT3JGQ/o.jpg"
        ]
    };

  const dummy_thumbnail = {
    image: "https://images.unsplash.com/photo-1516712109157-6a67f5d73fa1?w=500",
    name: "Hipster Bullshit",
    tags: ["Bitch", "Weird"],
    rating: 4.5,
    numReviews: 1234
  };

    return(
      <div>
        <PhotoCarousel photos={dummy_data.images}/>
        <rb.Grid className="suggest-detail">
          <rb.Row>
            <SuggestInfo data={dummy_data}/>
            <ActionSidebar source={dummy_data.link}/>
          </rb.Row>
          <rb.Row className="more-recommendations">
            <rb.Col xs={12}>
              <h3>More restaurants for you:</h3>
              <SuggestCarousel data={dummy_thumbnail} />
            </rb.Col>
          </rb.Row>
        </rb.Grid>
      </div>
    );
  }
}

export default SuggestDetail;
