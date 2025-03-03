import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { CiUser, CiLock } from "react-icons/ci";
import Dashboard from './Pages/Dashboard';
import TagPage from './Pages/TagPage';
import ImageUpload from './Pages/ImageUpload';

const App = () => {

  const dashboardData = [
    { header: 'Post 1', title: 'A Women in Tech', tags: ['Metoo', 'Tech'], value: 'The fight for gender equity in #Tech continues. Stand with survivors, support #Metoo initiatives, and advocate for systemic change.', imageUrl: 'https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/a1f03faa-a892-4c2d-86bc-f70a15438cf9.png' },
    { header: 'Post 2',title: 'Breaking the Silence', tags: ['Metoo'], value: 'Sharing our stories empowers others. Let\'s continue to break the silence and support each other. #MeToo2', imageUrl: 'https://www.the20.com/wp-content/uploads/2022/03/blog-women-business.png' },
    { header: 'Post 3',title: 'Embracing Diversity', tags: ['bruh'], value: 'I love studying at UCLA, etc. etc. Go Bruins!', imageUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXJwZWpwY3hob2RjazJ5dzl5d3E1YTUyZW42aWdoejc5ZDhrMjBmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AjAhhIsTGu2u1fAojp/giphy.gif"},
    { header: 'Post 4',title: 'Voices Amplified', tags: ['Metoo', 'bruh'], value: 'Your voice matters. Together, we can create a culture of respect and equality in tech.', imageUrl: 'https://www.globalfundforwomen.org/wp-content/uploads/2021/06/Copy-of-Me-too-cover.png' },
    { header: "Post 5", title : 'Hola from the Frontlines', tags: ['Hola', 'Metoo'], value: "Connecting across borders to support survivors and advocate for change. Hola!", imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/428691920_10232454103994487_1757240662027245422_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=JwIJ_GTMy5YQ7kNvgF3aSc7&_nc_oc=Adj09XymtwriDO4m-v6HruYd--_yvv4do8_dZE20ZVZ8RWfRdD3V4x8cHq36emEKIJ0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=AJkm5Y0KN-UjZ2W2HnpG2rL&oh=00_AYBxshM0jL0r2Q1H3y2nNzyQzKSb9srlGkd6x35CApooQQ&oe=67CADB64'},
    { header: "Post 6",title : 'Digital Safety First', tags: ['Internet', 'Tech'],value: "In the digital age, protecting ourselves online is crucial. Let's prioritize cybersecurity.", imageUrl: 'https://true-positives.com/hubfs/cybersecurity-breaches-real-world-examples-lessons-learned.webp'},
    { header: "Post 7",title : 'This is my Special Day', tags: ['Special Day'], value: "eating is the best thing ever", imageUrl: 'https://thedinnerdaily.com/wp-content/uploads/2015/09/homepagedinner-scaled.jpg'},
    { header: "Post 8",title : 'Remember to Love others as you love yourself', tags: ['Letter'],value: "Love is the answer.", imageUrl: "https://www.wikihow.com/images/thumb/5/54/Start-a-Love-Letter-Step-7-Version-3.jpg/v4-460px-Start-a-Love-Letter-Step-7-Version-3.jpg"},
    { header: "Post 9",title : 'vANDALISM!!', tags: ['chalkUp'],value: "Felt like a kid again!"},
    { header: "Post 10",title : 'I hope this makes someone\'s day', tags: ['chalkUp'],value: "I learned how to be Ironman and made protons"},
    //{ header: "Post 11", title : 'HRHR', tags: ['Hola', 'Metoo'], value: "1234"},
    //{ header: "Post 12",title : 'rrrrr', tags: ['Internet', 'Tech'],value: "1231231"},
    { header: "Post 13",title : 'Penpals', tags: ['Letter'], value: "do nobody have penpals no more? you all suck", imageUrl:"https://www.penshop.co.uk/wp-content/uploads/2013/01/Joyce.jpg"},
    { header: "Post 14",title : 'Dinner', tags: ['Dinner', 'Special Day'],value: "Dinner with a family!!", imageUrl: 'https://images.squarespace-cdn.com/content/v1/5ef9cdea85273b0a71817b5a/1595256202155-UAG15XZKC0L1Q0SKKB4W/IMG_0302+-+Alli+Howells.jpeg'},
    { header: "Post 15",title : 'Bonding Time', tags: ['Dinner'],value: "Learned how to cook today. I hate dishwashing.", imageUrl: 'https://media.npr.org/assets/img/2013/02/26/dinner01_slide-e8cbb73d5d5b2e8a53574e044cd075ddac0aa3bf.jpg'},
    { header: "Post 16",title : 'I hate Mexican Food', tags: ['Dinner', 'Letter'],value: "Tacos are the worst", imageUrl: 'https://mexicalicantinagrill.com/wp-content/uploads/2012/09/Family-Dinner-92211925.jpg'},
    {header: "Post 17",title : 'Crayons', tags: ['chalkUp'],value: "Hopefully this is legible", imageUrl:'https://i.pinimg.com/280x280_RS/93/0f/d0/930fd0791ca1ca1329fa7c09cba8c46e.jpg'},
    { header: "Post 18",title : 'bot', tags: ['chalkUp', 'Metoo'],value: "really enjoyed this!", imageUrl: 'https://images.squarespace-cdn.com/content/v1/5675d221cbced60a236e28b8/1660835463418-TIHRMISLX4DO4V1FKDJ5/Beth4.jpeg'},
  ];

  const router = createBrowserRouter([{ 
      path: "",
      element: <MainLayout />, 
      children: [
        {path: "/", element: <Login CiUser={CiUser} CiLock={CiLock}/>}, 
        {path: "/signup", element: <Signup CiUser={CiUser} CiLock={CiLock}/>},
        {path: "/ImageUpload", element: <ImageUpload />},
        //{path: "/home", element: <HomePage />},
        {path: "/home", element: <Dashboard dashboardData={dashboardData}/>},
        {path: "/tag/:tagName", element: <TagPage dashboardData={dashboardData}/>}
      ]}]);

      

return (
  <RouterProvider router={router} />
);
}

export default App

