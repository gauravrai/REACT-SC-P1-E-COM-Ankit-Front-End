import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

import Header from "../../Layout/Header/Header"
import Footer from '../../Layout/Footer/Footer'


const PrivacyPolicy = (props) => {
    
    return (
        <Fragment>
            {!props.match.params.mobile? <Header /> : "" }
            <section>
            <div id="contact-page" className="container">
                <h1>Privacy Policy</h1>
                <h2>Last updated: November 23, 2020</h2>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and
                    disclosure of Your information when You use the Service and tells You about Your privacy
                    rights and how the law protects You.</p>
                <p>We use Your Personal data to provide and improve the Service. By using the Service, You
                    agree to the collection and use of information in accordance with this Privacy Policy.</p>
                <h2>Interpretation and Definitions</h2>
                <h3>Interpretation</h3>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h3>Definitions</h3>
                <p>For the purposes of this Privacy Policy:</p>
                <ul>
                    <li><b>Account</b> means a unique account created for You to access our Service or parts of our Service.</li>
                    <li><b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to EVAMASTU LLP, Greater Noida, Uttar Pradesh .</li>
                    <li><b>Cookies</b> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                    <li><b>Country</b> refers to: India</li>
                    <li><b>State</b> refers to: Uttar Pradesh</li>
                    <li><b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                    <li><b>Personal Data</b> is any information that relates to an identified or identifiable individual.</li>
                    <li><b>Service</b> refers to the Website and Mobile Application.</li>
                    <li><b>Service Provider</b>  means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                    <li><b>Third-party Social Media Service</b>  refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
                    <li><b>Usage Data</b> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                    <li><b>Website</b> refers to “localbaniyaa”, accessible from <Link to='http://localbaniyaa.com'>www.localbaniyaa.com</Link></li>
                    <li><b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
                <h2>Collecting and Using Your Personal Data</h2>
                <h3>Types of Data Collected</h3>
                <h4>Personal Data</h4>
                <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                <ul>
                    <li>Email address</li><br />
                    <li>First name and last name</li><br />
                    <li>Phone number</li><br />
                    <li>Address, State, Province, ZIP/Postal code, City</li><br />
                    <li>Usage Data</li><br />
                    <li>Past Orders on website/application</li><br />
                </ul>
                <h4>Usage Data</h4>
                <p>Usage Data is collected automatically when using the Service.</p>
                <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                <h4>Cookies</h4>
                <p>Cookies are small files with alphanumeric identifiers that we transfer to your device through your web browser to enable our systems to recognize your browser and provide enhanced services by recognising choices you made such as to such as remembering your login details or language preference, products search. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time you use the service. </p>
                <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information for several purposes, including but not limited to:</p>
                <ul>
                    <li>Keeping a track of the session to facilitate your future use of the site and to identify if you join a registration pipeline.</li><br />
                    <li>Conducting research and diagnostics to improve Amazon's content, products and services.</li><br />
                    <li>Track your choices and serve you better with related products and offers. </li><br />
                </ul>
                <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device even when You go offline, while Session Cookies are terminated with the end of service session.</p>
                <h3>COOKIES AND BROWSER SETTINGS</h3>
                <p>You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.The Help menu on the menu bar of most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie and how to disable cookies altogether. Additionally, you can disable or delete similar data used by browser add-ons, such as Flash cookies, by changing the add-ons settings or visiting the website of its manufacturer.</p>
                <h3>THIRD PARTY COOKIES</h3>
                <p>Third parties may place cookies on this Amazon site. The information practices of these third parties are not covered by our Privacy Policy or this Cookies page. Please contact them directly for more information about their privacy practices. Also, as described above, you may modify the settings in your browser to notify you when you receive a new cookie and disable cookies altogether.</p>
                <h2>Use of Your Personal Data</h2>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul>
                    <li><b>To provide and maintain our Service,</b> including to monitor the usage of our Service.</li><br />
                    <li><b>To manage Your Account:</b> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li><br />
                    <li><b>For delivering and communicating</b> with you about your purchases of products and services, improving and personalizing your experience with our Service, and complying with legal obligations, among others</li><br />
                    <li><b>For the performance of a contract:</b> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li><br />
                    <li><b>To contact You:</b> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li><br />
                    <li><b>To provide You:</b> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li><br />
                    <li><b>To manage Your requests:</b> To attend and manage Your requests to Us.</li><br />
                    <li><b>For business transfers:</b> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li><br />
                    <li><b>Comply with legal obligations.</b> In certain cases, we collect and use your personal information to comply with laws.</li><br />
                    <li><b>For other purposes: </b> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li><br />
                </ul>
                <p>Information about our customers is an important part of our business and we are not in the business of selling your personal information to others. We may share your personal information with third parties, but this is only in order to provide you with services or comply with applicable laws.</p>
                <br />
                <p>We may share Your personal information in the following situations:</p>
                <ul>
                    <li><b>With Service Providers:</b> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                    <li><b>For business transfers:</b> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                    <li><b>With Affiliates:</b> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                    <li><b>With business partners:</b> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                    <li><b>With Legal entity or Government agencies: </b> We may need to share Your information with legal entities and government agencies for any legal obligation or as required by law. </li>
                    <li><b>With other users:</b> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
                    <li><b>With Your consent:</b> We may disclose Your personal information for any other purpose with Your consent.</li>
                </ul>
                <h2>Retention of Your Personal Data</h2>
                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                <h2>Transfer of Your Personal Data</h2>
                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                <h2>Disclosure of Your Personal Data</h2>
                <h3>Business Transactions</h3>
                <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                <h3>Law enforcement</h3>
                <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                <h3>Other legal requirements</h3>
                <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                </ul>
                <h2>Security of Your Personal Data</h2>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                <p>We design our systems and services with your security and privacy in mind.</p>
                <ul>
                    <li>We work to protect the security of your personal information during transmission by using encryption protocols and software. </li>
                    <li>We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling payment card data. </li>
                    <li>We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, processing, and disclosure of personal customer information. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you. </li>
                    <li>It is important for you to protect against unauthorized access to your password and to your devices and applications. Be sure to sign off when finished using a shared computer. Any leakage of application via compromise of device you are using to access the service shall not be the responsibility of the company</li>    
                </ul>
                <h2>Links to Other Websites</h2>
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                <h2>Changes to this Privacy Policy</h2>
                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul>
                    <li><b>By email: care@localbaniyaa.com</b></li>
                </ul>
            </div>

            </section>
            {!props.match.params.mobile? <Footer /> : "" }
            
        </Fragment>
    )
}

export default PrivacyPolicy
