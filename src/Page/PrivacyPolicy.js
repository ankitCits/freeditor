import React, { useEffect } from "react";
import AppBase from "../components/AppBase";

const PrivacyPolicy = (props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AppBase>
      <PrivacyPolicy1 />
    </AppBase>
  );
};

export default PrivacyPolicy;

const PrivacyPolicy1 = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: 10 }}>
        <h2 style={{ textAlign: "center", padding: "20px" }}>
          Privacy Policy for Freeditor
        </h2>

        <p>
          At Freeditor, accessible from www.freeditor.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Freeditor and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Freeditor. This policy is not applicable to
          any information collected offline or via channels other than this
          website. Our Privacy Policy was created with the help of the{" "}
          <a href="https://www.privacypolicygenerator.info/">
            Free Privacy Policy Generator
          </a>
          .
        </p>

        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h2>Information we collect</h2>

        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
        <p>
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </p>

        <h2>How we use your information</h2>

        <p>We use the information we collect in various ways, including to:</p>

        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>Log Files</h2>

        <p>
          Freeditor follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </p>

        <h2>Cookies and Web Beacons</h2>

        <p>
          Like any other website, Freeditor uses 'cookies'. These cookies are
          used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>

        <h2>Google DoubleClick DART Cookie</h2>

        <p>
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL –{" "}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h2>Our Advertising Partners</h2>

        <p>
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
        </p>

        <ul>
          <li>
            <p>Google</p>
            <p>
              <a href="https://policies.google.com/technologies/ads">
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </li>
        </ul>

        <h2>Advertising Partners Privacy Policies</h2>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Freeditor.
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Freeditor, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>

        <p>
          Note that Freeditor has no access to or control over these cookies
          that are used by third-party advertisers.
        </p>

        <h2>Third Party Privacy Policies</h2>

        <p>
          Freeditor's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.{" "}
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </p>

        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

        <p>
          Under the CCPA, among other rights, California consumers have the
          right to:
        </p>
        <p>
          Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </p>
        <p>
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </p>
        <p>
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data.
        </p>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>

        <h2>GDPR Data Protection Rights</h2>

        <p>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </p>
        <p>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </p>
        <p>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </p>
        <p>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </p>
        <p>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </p>
        <p>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </p>
        <p>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </p>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>

        <h2>Children's Information</h2>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          Freeditor does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
      </div>

      {/*<div className="container">*/}

      {/*    <h4 className="heading1">Privacy Policy</h4>*/}
      {/*    <p className="para">Last updated: September 08, 2022</p>*/}
      {/*    <p className="para">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure*/}
      {/*        of*/}
      {/*        Your information when You use the Service and tells You about Your privacy rights and how the law protects*/}
      {/*        You.*/}
      {/*    </p>*/}
      {/*    <p className="para">We use Your Personal data to provide and improve the Service. By using the Service, You agree to*/}
      {/*        the*/}
      {/*        collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been*/}
      {/*        created*/}
      {/*        with the help of the TermsFeed Privacy Policy Generator.</p>*/}

      {/*    <h4 className="heading2">Interpretation</h4>*/}
      {/*    <p className="para">The words of which the initial letter is capitalized have meanings defined under the following*/}
      {/*        conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or*/}
      {/*        in plural.</p>*/}

      {/*    <h4 className="heading2">Definitions</h4>*/}
      {/*    <p className="para">For the purposes of this Privacy Policy: </p>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li><b>Account </b>means a unique account created for You to access our Service or parts of our Service.</li>*/}
      {/*        <li><b>Affiliate </b>means an entity that controls, is controlled by or is under common control with a party,*/}
      {/*            where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to*/}
      {/*            vote for election of directors or other managing authority.</li>*/}
      {/*        <li><b>Application </b>means the software program provided by the Company downloaded by You on any electronic*/}
      {/*            device, named freeditor</li>*/}
      {/*        <li><b>Company </b>(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to*/}
      {/*            freeditor.</li>*/}
      {/*        <li><b>Cookies </b>are small files that are placed on Your computer, mobile device or any other device by a*/}
      {/*            website, containing the details of Your browsing history on that website among its many uses.</li>*/}
      {/*        <li><b>Country </b>refers to: Madhya Pradesh, India</li>*/}
      {/*        <li><b>Device </b>means any device that can access the Service such as a computer, a cellphone or a digital*/}
      {/*            tablet.</li>*/}
      {/*        <li><b>Personal Data</b>is any information that relates to an identified or identifiable individual.</li>*/}
      {/*        <li><b>Service </b>refers to the Application or the Website or both.</li>*/}
      {/*        <li><b>Service Provider</b>means any natural or legal person who processes the data on behalf of the Company. It*/}
      {/*            refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the*/}
      {/*            Service on behalf of the Company, to perform services related to the Service or to assist the Company in*/}
      {/*            analyzing how the Service is used.</li>*/}
      {/*        <li><b>Usage Data </b>efers to data collected automatically, either generated by the use of the Service or from*/}
      {/*            the Service infrastructure itself (for example, the duration of a page visit).</li>*/}
      {/*        <li><b>Website </b> refers to freeditor, accessible from <a*/}
      {/*            href="http://api.freeditor.com/">http://api.freeditor.com/</a></li>*/}
      {/*        <li><b>You </b>means the individual accessing or using the Service, or the company, or other legal entity on*/}
      {/*            behalf of which such individual is accessing or using the Service, as applicable.</li>*/}
      {/*    </ul>*/}

      {/*    <h4 className="heading1">Collecting and Using Your Personal Data</h4>*/}

      {/*    <h4 className="heading2">Types of Data Collected</h4>*/}

      {/*    <h4 className="heading3">Personal Data</h4>*/}
      {/*    <p className="para">While using Our Service, We may ask You to provide Us with certain personally identifiable*/}
      {/*        information that can be used to contact or identify You. Personally identifiable information may include, but is*/}
      {/*        not limited to:</p>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li>Email address</li>*/}
      {/*        <li>First name and last name</li>*/}
      {/*        <li>Phone number</li>*/}
      {/*        <li>Usage Data</li>*/}
      {/*    </ul>*/}

      {/*    <h4 className="heading1">Usage Data</h4>*/}
      {/*    <p className="para">Usage Data is collected automatically when using the Service.</p>*/}
      {/*    <p className="para">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP*/}
      {/*        address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,*/}
      {/*        the time spent on those pages, unique device identifiers and other diagnostic data.</p>*/}
      {/*    <p className="para">When You access the Service by or through a mobile device, We may collect certain information*/}
      {/*        automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the*/}
      {/*        IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use,*/}
      {/*        unique device identifiers and other diagnostic data.</p>*/}
      {/*    <p className="para">We may also collect information that Your browser sends whenever You visit our Service or when You*/}
      {/*        access the Service by or through a mobile device.</p>*/}

      {/*    <h4 className="heading3">Information Collected while Using the Application</h4>*/}
      {/*    <p className="para">While using Our Application, in order to provide features of Our Application, We may collect, with*/}
      {/*        Your prior permission:</p>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li>Information from your Device's phone book (contacts list)</li>*/}
      {/*    </ul>*/}
      {/*    <p className="para">We use this information to provide features of Our Service, to improve and customize Our Service.*/}
      {/*        The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply*/}
      {/*        stored on Your device.</p>*/}
      {/*    <p className="para">You can enable or disable access to this information at any time, through Your Device settings.</p>*/}

      {/*    <h4 className="heading3">Tracking Technologies and Cookies</h4>*/}
      {/*    <p className="para">We use Cookies and similar tracking technologies to track the activity on Our Service and store*/}
      {/*        certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information*/}
      {/*        and to improve and analyze Our Service. The technologies We use may include:</p>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li><b>Cookies or Browser Cookies.</b>A cookie is a small file placed on Your Device. You can instruct Your*/}
      {/*            browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies,*/}
      {/*            You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it*/}
      {/*            will refuse Cookies, our Service may use Cookies.</li>*/}
      {/*        <li><b>Flash Cookies.</b>Certain features of our Service may use local stored objects (or Flash Cookies) to*/}
      {/*            collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not*/}
      {/*            managed by the same browser settings as those used for Browser Cookies. For more information on how You can*/}
      {/*            delete Flash Cookies, please read "Where can I change the settings for disabling, or deleting local shared*/}
      {/*            objects?" available at <a*/}
      {/*                href="">https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</a>*/}
      {/*        </li>*/}
      {/*        <li><b>Web Beacons.</b>Certain sections of our Service and our emails may contain small electronic files known as*/}
      {/*            web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for*/}
      {/*            example, to count users who have visited those pages or opened an email and for other related website statistics*/}
      {/*            (for example, recording the popularity of a certain section and verifying system and server integrity).</li>*/}
      {/*    </ul>*/}
      {/*    <p className="para">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal*/}
      {/*        computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web*/}
      {/*        browser. You can learn more about cookies on TermsFeed website article.</p>*/}
      {/*    <p className="para">We use both Session and Persistent Cookies for the purposes set out below:</p>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li><b>Necessary / Essential Cookies</b></li>*/}
      {/*        <p className="para">Type: Session Cookies</p>*/}
      {/*        <p className="para">Administered by: Us</p>*/}
      {/*        <p className="para">Purpose: These Cookies are essential to provide You with services available through the Website*/}
      {/*            and*/}
      {/*            to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user*/}
      {/*            accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these*/}
      {/*            Cookies to provide You with those services.</p>*/}
      {/*    </ul>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li><b>Cookies Policy / Notice Acceptance Cookies</b></li>*/}
      {/*        <p className="para">Type: Persistent Cookies</p>*/}
      {/*        <p className="para">Administered by: Us</p>*/}
      {/*        <p className="para">Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>*/}
      {/*    </ul>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li><b>Functionality Cookies</b></li>*/}
      {/*        <p className="para">Type: Persistent Cookies</p>*/}
      {/*        <p className="para">Administered by: Us</p>*/}
      {/*        <p className="para">Purpose: These Cookies allow us to remember choices You make when You use the Website, such as*/}
      {/*            remembering your login details or language preference. The purpose of these Cookies is to provide You with a*/}
      {/*            more personal experience and to avoid You having to re-enter your preferences every time You use the Website.*/}
      {/*        </p>*/}
      {/*    </ul>*/}
      {/*    <p className="para">For more information about the cookies we use and your choices regarding cookies, please visit our*/}
      {/*        Cookies Policy or the Cookies section of our Privacy Policy.</p>*/}

      {/*    <h4 className="heading1">Children's Privacy</h4>*/}
      {/*    <p className="para">Our Service does not address anyone under the age of 13. We do not knowingly collect personally*/}
      {/*        identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that*/}
      {/*        Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected*/}
      {/*        Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove*/}
      {/*        that information from Our servers.</p>*/}
      {/*    <p className="para">If We need to rely on consent as a legal basis for processing Your information and Your country*/}
      {/*        requires consent from a parent, We may require Your parent's consent before We collect and use that information.*/}
      {/*    </p>*/}

      {/*    <h4 className="heading1">Changes to this Privacy Policy</h4>*/}
      {/*    <p className="para">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the*/}
      {/*        new Privacy Policy on this page.</p>*/}
      {/*    <p className="para">We will let You know via email and/or a prominent notice on Our Service, prior to the change*/}
      {/*        becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>*/}
      {/*    <p className="para">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy*/}
      {/*        Policy are effective when they are posted on this page.</p>*/}

      {/*   */}
      {/*    <p className="para">If you have any questions about this Privacy Policy, You can contact us:</p>*/}
      {/*    <ul className="page-lists">*/}
      {/*        <li>By email: freeditor@gmail.com</li>*/}
      {/*    </ul>*/}

      {/*</div>*/}
    </>
  );
};
