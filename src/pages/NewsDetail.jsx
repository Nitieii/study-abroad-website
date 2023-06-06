import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { vi } from "date-fns/locale";
import "react-tabs/style/react-tabs.css";
import HotNews from "../components/HotNews";
import "../assets/css/NewsDetail.css";
import { usePathName, usePost } from "../hooks";
import { useParams } from "react-router-dom";

const tabs = [
  {
    index: 0,
    title: "Các ưu đãi và học bổng du học",
  },
  {
    index: 1,
    title: "Cẩm nang du học",
  },
  {
    index: 2,
    title: "Chính sách du học",
  },
];

const hotNews = [
  {
    _id: 1,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320398641_21cded1bb15a2dfae7684a8c05e09e66.jpg",
  },
  {
    _id: 2,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320629262_7729baaac253c1a7d80a6415106e032e.jpg",
  },
  {
    _id: 3,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
  {
    _id: 4,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
  {
    _id: 5,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
];

const newsContent = {
  _id: 1,
  title: "Tuyển sinh du học Hàn Quốc",
  content: `<div id="maincontent" class="dcr-4heuut"><div class="article-body-commercial-selector article-body-viewer-selector  dcr-1t62qer"><span class="dcr-d66r6p"><h2 id="focus-on-your-niche"><strong>Focus on your niche</strong></h2></span><p class="dcr-18sg7f2">If you haven’t already chosen a blog topic, thinking about your hobbies, passions and personal experiences is a good starting point.</p><div id="sign-in-gate"><gu-island name="SignInGateSelector" props="{&quot;format&quot;:{&quot;display&quot;:0,&quot;theme&quot;:4,&quot;design&quot;:9},&quot;contentType&quot;:&quot;Article&quot;,&quot;sectionName&quot;:&quot;money&quot;,&quot;tags&quot;:[{&quot;id&quot;:&quot;money/series/money-hacks&quot;,&quot;type&quot;:&quot;Series&quot;,&quot;title&quot;:&quot;Money hacks&quot;},{&quot;id&quot;:&quot;money/money&quot;,&quot;type&quot;:&quot;Keyword&quot;,&quot;title&quot;:&quot;Money&quot;},{&quot;id&quot;:&quot;money/consumer-affairs&quot;,&quot;type&quot;:&quot;Keyword&quot;,&quot;title&quot;:&quot;Consumer affairs&quot;},{&quot;id&quot;:&quot;media/blogging&quot;,&quot;type&quot;:&quot;Keyword&quot;,&quot;title&quot;:&quot;Blogging&quot;},{&quot;id&quot;:&quot;media/digital-media&quot;,&quot;type&quot;:&quot;Keyword&quot;,&quot;title&quot;:&quot;Digital media&quot;},{&quot;id&quot;:&quot;media/media&quot;,&quot;type&quot;:&quot;Keyword&quot;,&quot;title&quot;:&quot;Media&quot;},{&quot;id&quot;:&quot;uk/uk&quot;,&quot;type&quot;:&quot;Keyword&quot;,&quot;title&quot;:&quot;UK news&quot;},{&quot;id&quot;:&quot;type/article&quot;,&quot;type&quot;:&quot;Type&quot;,&quot;title&quot;:&quot;Article&quot;},{&quot;id&quot;:&quot;tone/features&quot;,&quot;type&quot;:&quot;Tone&quot;,&quot;title&quot;:&quot;Features&quot;},{&quot;id&quot;:&quot;profile/harriet-meyer&quot;,&quot;type&quot;:&quot;Contributor&quot;,&quot;title&quot;:&quot;Harriet Meyer&quot;,&quot;bylineImageUrl&quot;:&quot;https://i.guim.co.uk/img/static/sys-images/Money/Pix/pictures/2014/1/10/1389370109971/Harriet-Meyer-003.jpg?width=300&amp;quality=85&amp;auto=format&amp;fit=max&amp;s=5aaf991b5352311b14509f9724c7e6cb&quot;},{&quot;id&quot;:&quot;publication/theguardian&quot;,&quot;type&quot;:&quot;Publication&quot;,&quot;title&quot;:&quot;The Guardian&quot;},{&quot;id&quot;:&quot;theguardian/mainsection&quot;,&quot;type&quot;:&quot;NewspaperBook&quot;,&quot;title&quot;:&quot;Main section&quot;},{&quot;id&quot;:&quot;theguardian/mainsection/money&quot;,&quot;type&quot;:&quot;NewspaperBookSection&quot;,&quot;title&quot;:&quot;Money&quot;},{&quot;id&quot;:&quot;tracking/commissioningdesk/uk-money&quot;,&quot;type&quot;:&quot;Tracking&quot;,&quot;title&quot;:&quot;UK Money&quot;}],&quot;isPaidContent&quot;:false,&quot;isPreview&quot;:false,&quot;host&quot;:&quot;https://www.theguardian.com&quot;,&quot;pageId&quot;:&quot;money/2022/dec/05/how-to-start-a-blog-tips-profitable&quot;,&quot;idUrl&quot;:&quot;https://profile.theguardian.com&quot;}" clientonly="true" data-gu-ready="true"></gu-island></div><p class="dcr-18sg7f2">Pamela Rae-Welsh, the creative director at the online visibility specialist <a href="https://worsleycreative.co.uk/" data-link-name="in body link">Worsley Creative</a>, says: “With so much online content, you’ll need to carve out a unique purpose that your blog will serve. For example, rather than creating a general cooking and recipe blog, consider a specific niche, such as Italian-inspired vegetarian cooking.” </p><p class="dcr-18sg7f2">Whatever your subject, also think about what you are hoping to achieve to refine your blog’s aim. For example, that might be to help people, make them laugh or teach them something.</p><span class="dcr-d66r6p"><h2 id="choose-your-blog-name"><strong>Choose your blog name</strong></h2></span><p class="dcr-18sg7f2">Once you have decided on your subject, you need a blog name. Bear in mind that your blog and domain name should be the same, and ideally one that will stand out from the crowd.</p><p class="dcr-18sg7f2">It could be relevant to your subject but it doesn’t have to be. Lynn Beattie, a personal finance expert and the founder of <a href="https://www.mrsmummypenny.co.uk/" data-link-name="in body link">Mrs MummyPenny</a>, says: “You simply need it to be as short as possible, and memorable, so it could be a specific word, phrase or play on words.” You could spark some ideas by using the <a href="https://ads.google.com/intl/en_uk/home/tools/keyword-planner/" data-link-name="in body link">Google keyword planner</a> and the <a href="https://www.wordtracker.com/" data-link-name="in body link">Wordtracker keyword tool</a> to search for the terms you might write about.</p><figure id="a4f1b6f5-9716-495b-a42e-93045b5a4fab" data-spacefinder-role="inline" data-spacefinder-type="model.dotcomrendering.pageElements.ImageBlockElement" class=" dcr-10khgmf"><div class="dcr-1b267dg"><picture class="dcr-4zleql"><source srcset="https://i.guim.co.uk/img/media/c0f206017ce5a3aaccc22b93a94a830e5c1bd95a/66_34_5245_3172/master/5245.jpg?width=620&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 660px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 660px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/c0f206017ce5a3aaccc22b93a94a830e5c1bd95a/66_34_5245_3172/master/5245.jpg?width=620&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 660px)"><source srcset="https://i.guim.co.uk/img/media/c0f206017ce5a3aaccc22b93a94a830e5c1bd95a/66_34_5245_3172/master/5245.jpg?width=605&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 480px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 480px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/c0f206017ce5a3aaccc22b93a94a830e5c1bd95a/66_34_5245_3172/master/5245.jpg?width=605&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 480px)"><source srcset="https://i.guim.co.uk/img/media/c0f206017ce5a3aaccc22b93a94a830e5c1bd95a/66_34_5245_3172/master/5245.jpg?width=445&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 320px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 320px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/c0f206017ce5a3aaccc22b93a94a830e5c1bd95a/66_34_5245_3172/master/5245.jpg?width=445&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 320px)"><img alt="Overhead image of a female blogger writing on the laptop" src="https://i.guim.co.uk/img/media/c0f206017ce5a3aaccc22b93a94a830e5c1bd95a/66_34_5245_3172/master/5245.jpg?width=445&amp;quality=85&amp;dpr=1&amp;s=none" width="445" height="269.1210676835081" loading="lazy" class="dcr-4zleql"></picture></div><figcaption class="dcr-64806o"><span class="dcr-1usbar2"><svg width="18" height="13" viewBox="0 0 18 13"><path d="M18 3.5v8l-1.5 1.5h-15l-1.5-1.5v-8l1.5-1.5h3.5l2-2h4l2 2h3.5l1.5 1.5zm-9 7.5c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5z"></path></svg></span><span class="dcr-d73nb7">The name of your blog does not have to be relevant to the subject.</span> Photograph: lechatnoir/Getty Images</figcaption></figure><div class="ad-slot-container ad-slot-container-2 offset-right ad-slot--offset-right ad-slot-container--offset-right"><div id="dfp-ad--inline2" class="js-ad-slot ad-slot ad-slot--inline ad-slot--inline2" data-link-name="ad slot inline2" data-name="inline2" aria-hidden="true"></div></div><p class="dcr-18sg7f2">However, make sure your name isn’t already taken, so search across web domains and social media. You can search and buy your domain through different registrars such as <a href="https://www.godaddy.com/en-uk/offers/godaddy?isc=coukuk1&amp;countryview=1&amp;currencyType=GBP&amp;cdtl=c_17613785248.g_141268354307.k_kwd-93455629.a_607200903067.d_c.ctv_g&amp;bnb=b&amp;gclid=EAIaIQobChMIzrqbw8Ke-wIVCbLtCh0lCgMaEAAYASAAEgItj_D_BwE" data-link-name="in body link">GoDaddy</a> and <a href="https://www.123-reg.co.uk/" data-link-name="in body link">123 Reg</a>. See if you can buy the .com and .co.uk extensions.</p><span class="dcr-d66r6p"><h2 id="pick-your-platform"><strong>Pick your platform</strong></h2></span><p class="dcr-18sg7f2">You will also need to pick a blogging platform that you will use to design and write your blogposts and publish online. There are several to choose from, including <a href="https://wordpress.com/" data-link-name="in body link">WordPress</a>, <a href="https://www.typepad.com/" data-link-name="in body link">Typepad</a>, <a href="https://www.blogger.com/about/" data-link-name="in body link">Blogger</a> and <a href="https://www.tumblr.com/explore/trending?source=homepage_explore" data-link-name="in body link">Tumblr</a>.</p><p class="dcr-18sg7f2">WordPress claims to be the world’s most popular platform, and is great for beginners who are looking for a simple site that enables them to build a blog within minutes. There are plenty of YouTube tutorials that can help you get set up. You can then work on personalising your blog.</p><figure id="fddd9f6d-e5bd-4107-a0e2-7569403ffca0" data-spacefinder-role="inline" data-spacefinder-type="model.dotcomrendering.pageElements.ImageBlockElement" class=" dcr-10khgmf"><div class="dcr-1b267dg"><picture class="dcr-4zleql"><source srcset="https://i.guim.co.uk/img/media/dedc70078cf0e1d7a143e088253e69cd97b086ba/29_7_4188_2512/master/4188.jpg?width=620&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 660px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 660px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/dedc70078cf0e1d7a143e088253e69cd97b086ba/29_7_4188_2512/master/4188.jpg?width=620&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 660px)"><source srcset="https://i.guim.co.uk/img/media/dedc70078cf0e1d7a143e088253e69cd97b086ba/29_7_4188_2512/master/4188.jpg?width=605&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 480px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 480px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/dedc70078cf0e1d7a143e088253e69cd97b086ba/29_7_4188_2512/master/4188.jpg?width=605&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 480px)"><source srcset="https://i.guim.co.uk/img/media/dedc70078cf0e1d7a143e088253e69cd97b086ba/29_7_4188_2512/master/4188.jpg?width=445&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 320px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 320px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/dedc70078cf0e1d7a143e088253e69cd97b086ba/29_7_4188_2512/master/4188.jpg?width=445&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 320px)"><img alt="Tumblr social networking website" src="https://i.guim.co.uk/img/media/dedc70078cf0e1d7a143e088253e69cd97b086ba/29_7_4188_2512/master/4188.jpg?width=445&amp;quality=85&amp;dpr=1&amp;s=none" width="445" height="266.91499522445076" loading="lazy" class="dcr-4zleql"></picture></div><figcaption class="dcr-64806o"><span class="dcr-1usbar2"><svg width="18" height="13" viewBox="0 0 18 13"><path d="M18 3.5v8l-1.5 1.5h-15l-1.5-1.5v-8l1.5-1.5h3.5l2-2h4l2 2h3.5l1.5 1.5zm-9 7.5c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5z"></path></svg></span><span class="dcr-d73nb7">Blogging platforms include Tumblr, WordPress, Typepad and Blogger.</span> Photograph: NetPhotos/Alamy</figcaption></figure><span class="dcr-d66r6p"><h2 id="design-your-blog"><strong>Design your blog</strong></h2></span><p class="dcr-18sg7f2">Choosing your design theme is important because first impressions count. Francesca Henry favours WordPress for her money-saving blog <a href="https://www.themoneyfox.com/" data-link-name="in body link">the Money Fox</a>. She says: “You can buy some beautiful and functional themes from about £50 to £150, and get free plug-ins that help you do loads of things such as create a standalone homepage.”</p><p class="dcr-18sg7f2">A simple theme is usually best, while making your blog as user-friendly as possible, including a call to action to let your readers know where they can find you, with links to Twitter and Instagram, for example. You could also get a professional logo designed to complete your brand, or work on one yourself.</p><span class="dcr-d66r6p"><h2 id="find-your-audience"><strong>Find your audience</strong></h2></span><div class="ad-slot-container ad-slot-container-3 offset-right ad-slot--offset-right ad-slot-container--offset-right"><div id="dfp-ad--inline3" class="js-ad-slot ad-slot ad-slot--inline ad-slot--inline3" data-link-name="ad slot inline3" data-name="inline3" aria-hidden="true"></div></div><p class="dcr-18sg7f2">Go where your readers are. This could be on specific Facebook groups, for example, TikTok, Instagram or LinkedIn. Follow blogs on similar subjects, start conversations and tweet your posts.</p><p class="dcr-18sg7f2">Georgina Durrant runs <a href="https://senresourcesblog.com/" data-link-name="in body link">the SEN Resources Blog</a>, which is for parents and teachers of children with special educational needs and disabilities. “The blog now has more than 30,000 social media followers but it took a lot of regular, consistent posting of blogposts on my site, as well as posts on social media, and a lot more work than I initially expected to get there,” she says.</p><p class="dcr-18sg7f2">“You don’t get very far just sharing links. It’s about building a community around the blog. My following increased when I joined in and started conversations on social media. The readership of my blog kept on increasing as the community grew.”</p><figure id="48693692-4654-43e7-a269-7aea5b332dd9" data-spacefinder-role="supporting" data-spacefinder-type="model.dotcomrendering.pageElements.ImageBlockElement" class=" dcr-1sioudk"><div class="dcr-1b267dg"><picture class="dcr-4zleql"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=380&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 1300px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 1300px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=380&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 1300px)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=300&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 980px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 980px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=300&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 980px)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=620&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 660px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 660px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=620&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 660px)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=605&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 480px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 480px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=605&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 480px)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=445&amp;quality=45&amp;dpr=2&amp;s=none" media="(min-width: 320px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 320px) and (min-resolution: 120dpi)"><source srcset="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=445&amp;quality=85&amp;dpr=1&amp;s=none" media="(min-width: 320px)"><img alt="YouTube logo" src="https://i.guim.co.uk/img/media/95712bcd39244881a11ab65fc4d7829b0eea551c/37_24_4166_2499/master/4166.jpg?width=445&amp;quality=85&amp;dpr=1&amp;s=none" width="445" height="266.9359097455593" loading="lazy" class="dcr-4zleql"></picture></div><figcaption class="dcr-q456b8"><span class="dcr-1usbar2"><svg width="18" height="13" viewBox="0 0 18 13"><path d="M18 3.5v8l-1.5 1.5h-15l-1.5-1.5v-8l1.5-1.5h3.5l2-2h4l2 2h3.5l1.5 1.5zm-9 7.5c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5z"></path></svg></span><span class="dcr-d73nb7">You could add a YouTube channel to your blog.</span> Photograph: Éric Piermont/AFP/Getty Images</figcaption></figure><span class="dcr-d66r6p"><h2 id="add-other-channels"><strong>Add other channels</strong></h2></span><p class="dcr-18sg7f2">There will be people who prefer to listen or watch rather than read, so you could add a YouTube channel or podcast to your blog. Marie Brown, a blogger at <a href="https://beyondthekitchentable.co.uk/" data-link-name="in body link">Beyond the Kitchen Table</a>, which builds websites for small businesses, also has a podcast called the Website Coach. She says: “A podcast is a great way to market your blog, and featuring as a guest on other people’s podcasts is another option.”</p><p class="dcr-18sg7f2">She matches her podcast and blog topics. “You can either use the podcast transcript as the basis of the blog or, as I do, write the blogpost and use this as the outline for the podcast episode. I link the blogpost in the show notes to the podcast episode,” she says.</p><span class="dcr-d66r6p"><h2 id="keep-building-your-blog"><strong>Keep building your blog</strong></h2></span><p class="dcr-18sg7f2">You will want to focus on getting your brand known, producing content and sharing your expertise before potentially turning a profit. Networking to build up backlinks will ultimately help you to monetise your blog, too.</p><p class="dcr-18sg7f2">Rae-Welsh says: “Google is looking for unique, relevant and trustworthy content to rank in the search engines – the more you add relevant and quality content, the more traffic you will get, which will give you more opportunity to monetise.”</p><p class="dcr-18sg7f2">There are free tools such as <a href="https://search.google.com/search-console/about" data-link-name="in body link">Google Search Console</a> or <a href="https://analytics.google.com/analytics/web/" data-link-name="in body link">Google Analytics</a> that will help you create content that will be seen by search engines. “But it’s worth investing in learning SEO [search engine optimisation] properly if you want to make your blog a success,” Rae-Welsh adds.</p><span class="dcr-d66r6p"><h2 id="make-a-profit"><strong>Make a profit</strong></h2></span><p class="dcr-18sg7f2">There are various ways to make money from your blog. For example, firms that are relevant to your blog’s subject may want to buy some space and advertise their services using a box or banner. You may also want to consider approaching a particular brand to collaborate and produce a specific campaign on a subject you are passionate about.</p><aside class="dcr-1el64qt"><svg viewBox="4 4 24 16" class="dcr-zfs0u8"><path d="M9.2776 8H14.0473C13.4732 12.5489 12.9653 17.0095 12.7445 22H4C4.79495 17.142 6.4511 12.5489 9.2776 8ZM20.3852 8H25.0887C24.5808 12.5489 24.0067 17.0095 23.7859 22H15.0635C15.9688 17.142 17.5587 12.5489 20.3852 8Z"></path></svg><blockquote class="dcr-1u4hpl4">You will need to ensure you make it clear that the post is sponsored</blockquote><footer><cite class="dcr-18jnim0"></cite></footer></aside><div class="ad-slot-container ad-slot-container-4 offset-right ad-slot--offset-right ad-slot-container--offset-right"><div id="dfp-ad--inline4" class="js-ad-slot ad-slot ad-slot--inline ad-slot--inline4" data-link-name="ad slot inline4" data-name="inline4" aria-hidden="true"></div></div><p class="dcr-18sg7f2">You can also make money from sponsored links, where advertisers pay bloggers to publish a post that includes a link to their website. But you will need to ensure you make it clear that the post is sponsored.</p><p class="dcr-18sg7f2">Alternatively, there is affiliate marketing, where links are placed into your posts or on your page that direct readers to a website selling something. You will earn a commission on any sales. You can find companies looking to place affiliate links on sites such as <a href="https://www.tradedoubler.com/en/" data-link-name="in body link">Tradedoubler</a> and <a href="https://affiliate-program.amazon.co.uk/" data-link-name="in body link">Amazon Associates</a>.</p><p class="dcr-18sg7f2">Beattie adds: “There are so many other ways a blogger can make money, such as writing for brands, product sales, public speaking and social media advertising. The key is getting a well-diversified income stream.”</p></div></div>`,
  createdAt: "2022-12-06T07:00:00.000Z",
  thumbnail:
    "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320398641_21cded1bb15a2dfae7684a8c05e09e66.jpg",
};

const NewsDetail = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const { handleGetPathName } = usePathName();
  const { post } = usePost();
  const inputRef = useRef(null);
  const { id } = useParams();
  const currentPost = post.find((item) => item._id === id);

  useEffect(() => {
    handleGetPost();
    setLoading(false);

  }, []);

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>{currentPost.title}</h2>
            <ol>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    handleGetPathName("/");
                  }}
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/tin-tuc"
                  onClick={() => {
                    handleGetPathName("/tin-tuc");
                  }}
                >
                  Tin Tức
                </Link>
              </li>
              <li>{currentPost.title}</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <div className="row" style={{ marginTop: 30 }}>
            <div
              className="container col-md-8 NewDetails"
              style={{ paddingRight: 30 }}
            >
              <p
                style={{ fontSize: "14px" }}
                dangerouslySetInnerHTML={{ __html: currentPost.description }}
              ></p>
            </div>

            <div className="container col-md-4">
              <h5
                className="align-items-center"
                style={{
                  borderBottom: "1px solid #2f9931",
                  marginBottom: 15,
                }}
              >
                Tin tức hot nhất
              </h5>

              <HotNews />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsDetail;
