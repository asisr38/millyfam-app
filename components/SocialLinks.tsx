import { Twitter, Instagram } from "lucide-react";

const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const SocialLinks = () => {
  return (
    <section className="w-full py-12 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          Connect With Us
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.tiktok.com/@millyfam1?_t=ZP-8snW3zCpFJ1&_r=1
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            <div className="w-6 h-6"><TikTokIcon color="#D4AF37" /></div>
            <span className="sr-only">Tiktok</span>
          </a>
          <a
            href="https://x.com/millyfam96038?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/millyfam777/profilecard/?igsh=MTVoeW0zZ2ZoODM0Mg==
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
