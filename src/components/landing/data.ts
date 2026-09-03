export const WHATSAPP_URL =
  "https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart%2C%20I%27d%20like%20to%20discuss%20a%20furniture%20project.";

export const heroSlides = [
  {
    image: "/images/hero-studio.jpg",
    badge: "Chattogram · Made to order",
    title: ["Quiet forms.", "Lasting presence."],
    alt: "Heaven Furniture Mart bespoke living collection",
  },
  {
    image: "/images/dining-collection.jpg",
    badge: "The dining edit",
    title: ["Made for", "coming together."],
    alt: "Custom walnut dining furniture",
  },
  {
    image: "/images/craft-detail.jpg",
    badge: "From our workshop",
    title: ["Considered", "down to touch."],
    alt: "Furniture maker finishing carved wood",
  },
] as const;

export const collections = [
  { image: "/images/hero-studio.jpg", title: "Living, softly shaped", service: "Bespoke Sofa & Seating", location: "Chattogram", sector: "Residential", size: "Made to Measure", time: "Custom", description: "A living collection composed around comfort rather than convention—generous proportions, softened edges and tactile finishes made to become part of the everyday." },
  { image: "/images/bedroom-collection.jpg", title: "A room for retreat", service: "Bed & Storage", location: "Bangladesh", sector: "Residential", size: "Full Room", time: "Custom", description: "Quiet forms and thoughtful storage bring a sense of calm to the bedroom, with every element tailored around the room and the rituals that begin and end each day." },
  { image: "/images/dining-collection.jpg", title: "The gathering table", service: "Dining Furniture", location: "Chattogram", sector: "Residential", size: "4–10 Seats", time: "Custom", description: "A grounded dining setting made for unhurried meals and long conversations, balancing honest timber, enduring joinery and enough presence to anchor the room." },
  { image: "/images/showroom-02.jpg", title: "Inside the studio", service: "Furniture Gallery", location: "Agrabad", sector: "Showroom", size: "Full Collection", time: "Visit Us", description: "Our material library and furniture collection come together in one tactile space—a place to compare finishes, test proportions and shape an idea with our design team." },
] as const;

type NavigationLink = { label: string; href: string };

export type NavigationItem = NavigationLink & {
  dropdown?: "mega" | "normal";
  groups?: { heading: string; href: string; links: NavigationLink[] }[];
  links?: NavigationLink[];
  cards?: { image: string; title: string; description: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Furniture",
    href: "#projects",
    dropdown: "mega",
    groups: [
      { heading: "By Room", href: "#services", links: [{ label: "Living Room", href: "#services" }, { label: "Bedroom", href: "#services" }, { label: "Dining Room", href: "#services" }] },
      { heading: "Made For You", href: "#services", links: [{ label: "Fully Bespoke", href: "#services" }, { label: "Office & Study", href: "#services" }, { label: "Storage", href: "#services" }] },
    ],
    cards: [
      { image: "/images/hero-studio.jpg", title: "Living", description: "Comfort, proportion and character for the heart of the home.", href: "#projects" },
      { image: "/images/bedroom-collection.jpg", title: "Bedroom", description: "Restful pieces tailored around your room and routine.", href: "#projects" },
      { image: "/images/dining-collection.jpg", title: "Dining", description: "Considered furniture made for gathering and sharing.", href: "#projects" },
    ],
  },
  { label: "Made to measure", href: "#services", dropdown: "normal", links: [{ label: "Our Bespoke Service", href: "#services" }, { label: "Design Consultation", href: "#services" }, { label: "Materials & Finishes", href: "#services" }, { label: "Delivery & Installation", href: "#services" }] },
  { label: "Studio", href: "#story", dropdown: "normal", links: [{ label: "Our Point of View", href: "#story" }, { label: "How We Work", href: "#story" }, { label: "Craftsmanship", href: "#services" }] },
  { label: "Visit", href: "#showroom" },
  { label: "People", href: "#about", dropdown: "normal", links: [{ label: "Client Notes", href: "#about" }, { label: "Why Heaven", href: "#story" }, { label: "Contact", href: "#showroom" }] },
  { label: "Journal", href: "#insights", dropdown: "normal", links: [{ label: "Inspiration", href: "#insights" }, { label: "Furniture Guides", href: "#insights" }, { label: "Frequently Asked Questions", href: "#faq" }] },
];

export const testimonials = [
  { image: "/images/dining-collection.jpg", quote: "Heaven Furniture Mart understood that furniture is not simply function. Every detail was considered to reflect our lifestyle, taste and comfort.", role: "A HEAVEN HOMEOWNER, CHATTOGRAM", name: "A home made personal" },
  { image: "/images/hero-studio.jpg", quote: "From the first conversation to the final installation, the process felt personal, precise and completely focused on our room.", role: "BESPOKE FURNITURE CLIENT", name: "Designed around us" },
  { image: "/images/craft-detail.jpg", quote: "The quality of the timber, the finish and the craftsmanship gave us a piece that feels genuinely made to last.", role: "CUSTOM FURNITURE CLIENT", name: "Crafted with care" },
] as const;

export const services = [
  { title: "Living Room Furniture", description: "Sofas, centre tables, TV units and consoles designed as one considered living environment.", image: "/images/hero-studio.jpg" },
  { title: "Bedroom Furniture", description: "Beds, wardrobes, dressing tables and bedside pieces shaped around your space and storage needs.", image: "/images/bedroom-collection.jpg" },
  { title: "Dining Furniture", description: "Dining tables, chairs and storage with tailored dimensions, timber and finishing options.", image: "/images/dining-collection.jpg" },
  { title: "Office & Study", description: "Purposeful desks, shelving and storage that bring comfort and order to focused work.", image: "/images/office-study-ai.jpg" },
  { title: "Fully Bespoke", description: "A one-of-one service for clients who want complete freedom over size, material, detail and finish.", image: "/images/craft-detail.jpg" },
] as const;

export const inspirations = [
  { image: "/images/hero-studio.jpg", tag: "Collection", title: "How to choose a sofa that truly suits your room" },
  { image: "/images/craft-detail.jpg", tag: "Craft", title: "Why solid wood furniture feels different" },
  { image: "/images/dining-collection.jpg", tag: "Design", title: "Creating a dining space people want to stay in" },
  { image: "/images/bedroom-collection.jpg", tag: "Home", title: "The details that make a bedroom feel complete" },
  { image: "/images/bedroom-collection.jpg", tag: "Showroom", title: "See, touch and compare before you decide" },
] as const;

export const faqs = [
  { title: "Can every piece be customized?", answer: "Yes. Dimensions, timber, upholstery, colour and finish can be tailored around your room and preferences. Our team will guide you through the decisions during the design consultation." },
  { title: "Do you provide a design consultation?", answer: "Yes. We offer a complimentary initial consultation to understand your space, references and requirements before recommending a direction." },
  { title: "Do you deliver and install the furniture?", answer: "Yes. Delivery and installation are included as part of our full service, so each item is placed and checked properly in your home." },
  { title: "Where can I see the furniture in person?", answer: "Visit our showroom on Agrabad Access Road in Chattogram to explore our collections, materials and finishes with the team." },
] as const;
