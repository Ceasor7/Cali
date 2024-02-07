
const FooterIcons = () => {
  return (
    <div className="flex flex-row justify-center">
         <a href="https://www.facebook.com/profile.php?id=61552732195123"
          rel="noopener noreferrer"
           target="_blank"  
           className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-10 h-10 rounded-md"
              />
            </a>
           <a href="https://instagram.com/cali.institute?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-10 h-10 rounded-sm"
              />
            </a>
           <a href="https://x.com/Caliinstitute?t=oMH14klkkCMT8iKhHaxYCw&s=08"
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/twitter.svg"
                alt="Twitter"
                className="w-10 h-10 rounded-sm"
              />
            </a>
           <a href="https://www.linkedin.com/in/creative-arts-management-institute-cali-58b93a297/"
           rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-10 h-10 rounded-sm"
              />
            </a>         
            </div>
  )
}

export default FooterIcons