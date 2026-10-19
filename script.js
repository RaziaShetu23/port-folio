
const projects = [
    {
        name: "Flower Collection",
        description: "A beautiful flower website with search and filter functionality.",
        technology: "HTML, CSS, JavaScript"
    },
    {
        name: "Product Store",
        description: "A product website with product details and prices.",
        technology: "HTML, CSS, JavaScript"
    },
    {
        name: "Travel Destination",
        description: "A travel website showing destinations and details.",
        technology: "HTML, CSS, JavaScript, PHP"
    }
];

const projectList = document.getElementById("projectList");

projects.forEach(function(project) {
    projectList.innerHTML += `
        <div class="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg">

            <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl mb-5">
                <h3 class="text-xl font-bold text-blue-700">
                    ${project.name}
                </h3>
                <p class="text-gray-500 mt-2">My Project</p>
            </div>

            <h3 class="text-xl font-bold mb-3">
                ${project.name}
            </h3>

            <p class="text-gray-600 leading-7 mb-5">
                ${project.description}
            </p>

            <p class="text-blue-600 text-sm">
                ${project.technology}
            </p>

        </div>
    `;
});

document.getElementById("year").textContent = new Date().getFullYear();
