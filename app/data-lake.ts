export type TPost = {
  id: number;
  username: string;
  text: string;
  image?: string;
  upvotes: number;
  since: string;
};

export const demoPosts: TPost[] = [
  {
    id: 1,
    username: "sarthak_roy",
    since: "7 day",
    text: "I had Gallblader operation recently, that is why my health is not great. I hope you can understand.",
    upvotes: 0,
  },
  {
    id: 2,
    username: "john_doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus atque quo iusto debitis nesciunt tenetur natus provident assumenda commodi expedita voluptatibus odit deleniti delectus aperiam ratione, quod sunt accusantium! Accusantium sit iste nostrum asperiores, consequatur ipsum culpa ipsa necessitatibus, eum cumque\
          sapiente perferendis. Pariatur at dicta tempore in sed consectetur neque molestiae ducimus ea? Asperiores facilis maiores eos vel animi nobis exercitationem, perferendis natus, provident accusantium, voluptatem quos? Ipsum distinctio ipsam facere. Dolores ex mollitia repellendus maiores enim eligendi dignissimos tempore nisi rerum",
    image: "https://images3.alphacoders.com/134/1346314.jpeg",
    upvotes: 123,
    since: "2 years",
  },
  {
    id: 3,
    username: "jane_smith",
    text: "Can anyone recommend a good movie for the weekend?",
    image: "https://images3.alphacoders.com/134/1346314.jpeg",
    upvotes: 456,
    since: "5 months",
  },
  {
    id: 4,
    username: "tech_guru",
    text: "Excited for the new release of the latest tech gadget. What are your thoughts?",
    image: "https://images3.alphacoders.com/134/1346314.jpeg",
    upvotes: 789,
    since: "1 month",
  },
  {
    id: 5,
    username: "foodie_123",
    text: "Just tried a new recipe for homemade pizza. It turned out amazing!",
    upvotes: 234,
    since: "8 years",
  },
  {
    id: 5,
    username: "travel_lover",
    text: "Just got back from a fantastic trip to Paris. Here are some of my favorite photos!",
    image: "https://images3.alphacoders.com/134/1346314.jpeg",
    upvotes: 567,
    since: "3 years",
  },
];
