// Function to generate a business name
function generateBusinessName() {
    // Adjectives
    const adjectives = [
        "Dynamic", "Vibrant", "Innovative", "Creative", "Reliable",
        "Elegant", "Modern", "Sustainable", "Progressive", "Seamless",
        "Unique", "Efficient", "Tech-savvy", "Stellar", "Pioneering",
        "Versatile", "Proactive", "Radiant", "Agile", "Dazzling",
        "Exquisite", "Bold", "Impactful", "Visionary", "Sleek",
        "Expressive", "Inspiring", "Limitless", "Fresh", "Striking",
        "Refined", "Magnetic", "Zenith", "Insightful", "Prime",
        "Peak", "Sharp", "Streamlined", "Balanced", "Precise",
        "Optimal", "Ultimate", "Majestic", "Elite", "Supreme",
        "Regal", "Luxe", "Panoramic", "Prodigy", "Harmonious", "Distinct"
    ];

    // Business name extensions
    const extensions = [
        "Ltd", "LLC", "Inc", "Co", "Corp", "Ltda", "GmbH", "AG", "Pty Ltd", "S.A.",
        "Group", "Holdings", "Solutions", "Ventures", "International", "Enterprises",
        "Systems", "Innovations", "Technologies", "Partners", "Global", "Network",
        "Solutions", "Services", "Labs", "Creations", "Studio", "Collective", "Design",
        "Works", "Industries", "Labs", "Interactive", "Dynamics", "Nexus", "Concepts",
        "Fusion", "Creators", "Ventures", "Labs", "Innovations", "Ventures", "Group",
        "Partnerships", "Syndicate", "Enterprises", "Holdings", "Collaborative", "Network",
        "Initiatives", "Collaborative", "Agency", "Collective", "Dynamics", "Innovators",
        "Labs", "Innovations", "Creations", "Design", "Dynamics", "Solutions", "Collaborative",
        "Innovators", "Studio", "Technologies", "Innovations", "Group", "Dynamics",
        "Collaborative", "Network", "Creations", "Innovations", "Solutions", "Holdings",
        "Ventures", "Nexus", "Dynamics", "Innovations", "Ventures", "Labs", "Design",
        "Innovators", "Solutions", "Group", "Dynamics", "Creations", "Innovations", "Holdings",
        "Ventures", "Network", "Group", "Dynamics", "Solutions", "Innovations", "Creations",
        "Ventures"
    ];

    // Get user input
    const userWord = prompt("Enter a word related to your business:");

    // Generate the business name
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const extension = extensions[Math.floor(Math.random() * extensions.length)];

    // Construct the business name
    let businessName = adjective + " " + userWord;

    // Add extension if not empty
    if (extension !== "") {
        businessName += " " + extension;
    }

    // Display the business name
   return businessName;
}

// Call the function to generate a business name
document.write("Your Business Name is: "+ generateBusinessName());
