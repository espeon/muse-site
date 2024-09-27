import Card from "./card";
import Image from "next/image";

const firstNames = [
    "Alice", "Bob", "Charlie", "Dana", "Eli", "Fiona", 
    "Gabe", "Hannah", "Isaac", "Jade", "Kurt", "Liam", 
    "Maya", "Nina", "Oscar", "Piper", "Quinn", "Ryan", 
    "Sophie", "Tyler", "Uma", "Vera", "Will", "Xander", 
    "Yara", "Zane"
  ];
  
  const lastNames = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", 
    "Davis", "Miller", "Wilson", "Moore", "Taylor", 
    "Anderson", "Thomas", "Jackson", "White", "Harris", 
    "Martin", "Thompson", "Garcia", "Martinez", "Robinson"
  ];
  
  const avatarStyles = [
    "adventurer", "adventurer-neutral", "avataaars", "avataaars-neutral", 
    "big-ears", "big-ears-neutral", "big-smile", "bottts", "bottts-neutral", 
    "croodles", "croodles-neutral", "dylan", "fun-emoji", "glass", "icons", 
    "identicon", "initials", "lorelei", "lorelei-neutral", "micah", 
    "miniavs", "notionists", "notionists-neutral", "open-peeps", "personas", 
    "pixel-art", "pixel-art-neutral", "rings", "shapes", "thumbs"
  ];
  
  const getRandomElement = (arr: string | any[]) => arr[Math.floor(Math.random() * arr.length)];
  
  const generateUsername = (firstName: string, lastName: string) => {
    // Randomly decide if we want to add numbers to the @name
    const useNumbers = Math.random() > 0.5;
    const numberSuffix = useNumbers ? Math.floor(Math.random() * 1000) : '';

    const fn = Math.random() > 0.5 ? firstName.charAt(0) : firstName;
    const ln = Math.random() > 0.5 ? lastName.charAt(0) : lastName;
    
    // Create the username
    const username = `${firstName.toLowerCase()}${lastName.charAt(0).toLowerCase()}${numberSuffix}`;
    
    return `@${username}`;
  };
  
  const TwitterPost = ({ children, ...props }: any) => {
    const randomFirstName = props.firstName || getRandomElement(firstNames);
    const randomLastName = props.lastName || getRandomElement(lastNames);
    const randomAvatarStyle = getRandomElement(avatarStyles);
    const randomSeed = `${randomFirstName}${randomLastName}${Math.random().toString(36).substring(7)}`; // Unique seed for the avatar
    const username = generateUsername(randomFirstName, randomLastName);
  
    return (
      <Card className="bg-white dark:bg-gray-800">
        <div className="flex items-center mb-2">
          <Image 
            src={props.profileImage || `https://api.dicebear.com/9.x/${randomAvatarStyle}/svg?seed=${randomSeed}`} 
            alt={`${randomFirstName} ${randomLastName}`} 
            className="w-10 h-10 rounded-full mr-2" 
          />
                  <div className="flex flex-col">
          <span className="font-semibold">{`${randomFirstName} ${randomLastName}`}</span>
          <span className="text-gray-500 dark:text-gray-400">{username}</span>
        </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{children}</p>
      </Card>
    );
  };

  export default TwitterPost;