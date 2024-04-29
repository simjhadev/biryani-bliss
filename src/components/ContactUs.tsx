import { BiPhone, BiMap } from "react-icons/bi";

const ContactUs = () => {
    return (
        <div className="font-sans text-xl bg-primary text-white p-4 py-10  gap-10 flex flex-col justify-around md:flex-row" id="contactus">
            <div className="h-1/2">
                <div className="font-mont mb-10">OPENING HOURS</div>
                <div className="grid grid-cols-2 gap-5 text-lg md:text-xl" >
                    <div>Monday - Thursday</div>
                    <div>
                        <div>11:30 AM - 02:30 PM</div>
                        <div>05:00 PM - 12:00 AM</div>
                    </div>
                
                    <div>Friday - Sunday</div>
                    <div>
                        <div>11:30 AM - 03:30 PM</div>
                        <div>05:00 PM - 12:00 AM</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="mb-10 font-mont">GET IN TOUCH</div>
                <div className="grid grid-cols-[50px_minmax(0,_1fr)] gap-5 text-lg md:text-xl">
                <div><BiPhone style={{color: '#ffffff'}} /></div>
                <div>(123) 456 7890</div>
                <div><BiMap style={{color: '#ffffff'}} /></div>
                <div>123 Village Plaza, Suite #01, Stone Ridge, VA 20001.</div>
                </div>
                
            </div>
        </div>
    );
}

export default ContactUs;