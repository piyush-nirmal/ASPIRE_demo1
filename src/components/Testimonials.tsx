import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sagarika Shinde',
    role: 'SYRACUSE UNIVERSITY, FALL 2023',
    avatar: 'https://www.aspireeach.com/panel/assets/images/652a758657d86.jpg',
    initials: 'SS',
    quote: 'Aniket has provided excellent direction and help throughout the entire process. Doubts were addressed and resolved quickly, from determining which MS degree would be best suited to providing advice on how to write SOPs and selecting schools. He was very straightforward and honest about which colleges would accept or reject me based on my profile. He also assisted with visa interview preparation, and my visa was approved.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Om Langde',
    role: 'CRANFIELD UNIVERSITY, FALL 2023',
    avatar: 'https://www.aspireeach.com/panel/assets/images/652a760cab097.jpeg',
    initials: 'OL',
    quote: 'I had a remarkable experience with Aspire Each, the leading company providing outstanding services for abroad jobs, student visas, and IELTS training. Their dedicated team of experts guided me throughout the entire process, ensuring a seamless transition to my desired destination. Their in-depth knowledge of visa requirements and job markets abroad gave me the confidence to pursue my dreams.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Swamy Salunkhe',
    role: 'TU DUBLIN, FALL 2022',
    avatar: 'https://www.aspireeach.com/panel/assets/images/652a7640e7ab4.jpeg',
    initials: 'SS',
    quote: 'Thank you Aniket, for helping me out through the complete application process starting from filling out the form for Masters to the final Visa Process. You have been a good guide and mentor for me through this journey. Thanks for all your inputs. Would surely recommend to take help from Aniket if planning to apply for Masters.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Layashree Adepu',
    role: 'NORTH EASTERN UNIVERSITY, FALL 2023',
    avatar: 'https://www.aspireeach.com/panel/assets/images/652a740d7bf94.jpeg',
    initials: 'LA',
    quote: 'Aniket has been helpful throughout the entire process. Every time I panicked due to any issue, he would call up and ensure all the problems are solved and give answers and suggestions to all my doubts and issues. He helped in filling out forms, connecting me to financial services and peers going to the same college. He\'s always available on call and text.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Rashi Raut',
    role: 'SYRACUSE UNIVERSITY, FALL 2023',
    avatar: 'https://www.aspireeach.com/panel/assets/images/652a76ef4f6fb.jpeg',
    initials: 'RR',
    quote: 'Timely Support: Throughout the entire process, the consultants were prompt and responsive. They promptly addressed my queries, provided timely updates, and ensured that all the necessary documentation was completed accurately and on time. Their proactive approach gave me peace of mind and reassurance that I was in capable hands.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Samay Ghadge',
    role: 'UNIVERSITY COLLEGE DUBLIN, FALL 2023',
    avatar: 'https://www.aspireeach.com/panel/assets/images/652a71a455990.jpeg',
    initials: 'SG',
    quote: 'Experience with "Aspire each" has been amazing. Having a previous Canada visa rejection and financial complications made my case difficult for Ireland VISA, but efforts from Aniket and Kranti right from college admission to SOP and everything else finally landed me in Ireland. Grateful and highly recommended.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = testimonial.quote.split(' ');
  const isLong = words.length > 20;
  const displayQuote = isExpanded ? testimonial.quote : words.slice(0, 20).join(' ') + (isLong ? '...' : '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 sm:p-10 rounded-[20px] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
        ))}
      </div>

      {/* Quote */}
      <div className="flex-grow">
        <p className="text-[#1b182f] text-[17px] leading-[1.6] mb-4 font-medium">
          {displayQuote}
        </p>
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#002D62] font-bold hover:underline transition-all text-[15px] mb-8 inline-block"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Author info footer - exactly matching the image */}
      <div className="flex items-center gap-4 mt-auto pt-2">
        <div className="relative flex-shrink-0">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-slate-100 border border-slate-100 shadow-sm flex items-center justify-center">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[#002D62] font-bold text-xl">{testimonial.initials}</span>
            )}
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="text-[20px] font-bold text-[#002D62] tracking-tight leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-[12px] font-bold text-slate-800 uppercase tracking-wide leading-snug mt-1 opacity-90">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#002D62] font-bold text-base tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-[900] text-[#1b182f] mb-4">
            Dreams <span className="text-[#002D62]">Weaved!</span>
          </h2>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
