const hmw = [
     "How might we… Awaken the lenses?", 
     "How might we… Awaken the senses and inspire people?", 
     "How might we… Care for people so they can learn?", 
     "How might we… Communicate what the gallery can do?", 
     "How might we… Connect with the communities we're here for?", 
     "How might we… Create cultures of creative possibility?", 
     "How might we… Create moments of exchange?", 
     "How might we… Create opportunities to unlearn?", 
     "How might we… Create space for curiosity and 'wrong' answers", 
     "How might we… Create transformative experiences?", 
     "How might we… Design for accidental learning?", 
     "How might we… Develop and challenge ourselves to make change?", 
     "How might we… Develop, embed, and leverage the creativity that we already have?", 
     "How might we… Enable all the ways people learn?", 
     "How might we… Enable epiphanies for our visitors/staff?", 
     "How might we… Enable more 'doing' of learning?", 
     "How might we… Engage the sceptics?", 
     "How might we… Explore creative solutions without a destination?", 
     "How might we… Facilitate navigating the space?", 
     "How might we… Find and grow into cracks in the curriculum?", 
     "How might we… Foster/spark curiosity?", 
     "How might we… Give people agency to choose learning pathways that work for them?", 
     "How might we… Help build connections between fields?", 
     "How might we… Help connections between fields?", 
     "How might we… Help knowledge emerge in collaboration?", 
     "How might we… Help people 'go down the Rabbit hole'?", 
     "How might we… Help people be open to experiences?", 
     "How might we… Help people break the rules? (Safely)", 
     "How might we… Help people dig deeper into the world around them?", 
     "How might we… Help people experience the big picture?", 
     "How might we… Help people feel safe to be here?", 
     "How might we… Help people feel wonder and awe?", 
     "How might we… Help people go down the Rabbit hole?", 
     "How might we… Help people have a total body experience?", 
     "How might we… Help people know how to behave here?", 
     "How might we… Help people leave feeling good?", 
     "How might we… Help people pack their brain full of facts?", 
     "How might we… Help people realise there is more to know?", 
     "How might we… Help people see things anew?", 
     "How might we… Help people shift their perspectives in the world?", 
     "How might we… Help people to 'do' learning?", 
     "How might we… Help people to 'get it' without needing to 'know it'?", 
     "How might we… Help people to be really present?", 
     "How might we… Help people to connect the dots?", 
     "How might we… Help people to feel the beating heart of cultures?", 
     "How might we… Help people to want more? Visit again?", 
     "How might we… Help ppl feel confident to have an opinion?", 
     "How might we… Increase opportunities for sticky empathy?", 
     "How might we… Ensure learning is valuable and tailored?", 
     "How might we… Keep curiosity and empathy alive", 
     "How might we… Know more about the changes people undergo here?", 
     "How might we… Learn from people?", 
     "How might we… Learn from people?", 
     "How might we… Make it easier to 'tell us once'?",
     "How might we… Create something tangible to initiate and steward change?", 
     "How might we… Make opportunities for cultural development", 
     "How might we… Make opportunities for Yindyamarra?", 
     "How might we… Make space and time?", 
     "How might we… Make space for deep learning?", 
     "How might we… Make space for learning and just experiencing?", 
     "How might we… Meet people where they are?", 
     "How might we… Move people outside their comfort zone?", 
     "How might we… know when people are ready for knowledge?", 
     "How might we… Promote reciprocity?", 
     "How might we… Quickly set visitors up to have a great experience?", 
     "How might we… Scaffold experiences?", 
     "How might we… Share transformative experiences?", 
     "How might we… Spark doubt or enlightenment ?", 
     "How might we… Spark motivation to learn", 
     "How might we… Start your visit primed to learn?", 
     "How might we… Support audiences to earn knowledge?", 
     "How might we… Support confidence and movement?", 
     "How might we… Support different ways of knowing?", 
     "How might we… Support discursive exchange?", 
     "How might we… Support humility in our experiences?", 
     "How might we… Support learning for fun?", 
     "How might we… Support learning through conversation?", 
     "How might we… Support people when they're challenged?", 
     "How might we… Support resepectful non-compliance?", 
     "How might we… Take ppl places they haven't been?", 
     "How might we… Take the benefit of all the years behind the work?", 
     "How might we… Understand the connection we can make with an audience?",
    "What if staff were visitors too?",
    "What if Pizza Pizza were helping us change?",
    "How would Pixar design for learning?",
    "What if we didn’t label it as learning?",
    "What if we used to work together?",
    "What if learning was core business?"
]  






const cards = [...new Set([...hmw])];

const $button = document.getElementById('button');
const $card = document.getElementById('card');
const $strategy = document.getElementById('strategy');
const $flipper = document.getElementById('flipper');
const $front = document.getElementById('front');
const $back = document.getElementById('back');

const strategyCount = cards.length;

var flip = false;

function flipCard() {
    if (flip) {
        $flipper.classList.remove('flip');
        flip = false;
        console.log('if flip  ' + flip);
    } else {
        $flipper.classList.add('flip');
        flip = true;
        console.log('else ' + flip);
    }
}

function showCard(meta) {
    let strategy = cards[Math.floor(Math.random() * strategyCount)];
    if (flip) {
        $front.innerText = strategy;
    } else {
        $back.innerText = strategy;
    }
}

$button.addEventListener('click', function() {
    showCard(false);
    flipCard();
});

window.addEventListener('load', function () {
    showCard();
    flipCard();
});