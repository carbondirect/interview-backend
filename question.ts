interface Project {
    id: string;
    name: string;
    location: string;
    type: string;
}

interface Inventory {
    id: string;
    projectId: string;
    tonnes: number;
    priceUsd: number;
    year: number;
}

interface Order {
    id: string;
    inventoryId: string;
    tonnesRequested: number;
    orderedBy: string;
}

interface ProjectWithInventory extends Project {
    inventory: Inventory[];
}

const PROJECTS: Project[] = [
    {
        id: 'GueVQR50MGH0Za8wXBWhk',
        name: 'Norway DAC',
        location: 'Norway',
        type: 'Direct Air Capture'
    },
    {
        id: 'pdZseFCOaxd2kTcX1O2pl',
        name: 'Appalachian Forest',
        location: 'United States',
        type: 'Forest'
    },
];

const INVENTORIES: Inventory[] = [
    {
        id: 'TiFai1QBKzkMDOZzpQewC',
        projectId: 'GueVQR50MGH0Za8wXBWhk',
        tonnes: 100,
        priceUsd: 50,
        year: 2022,
    },
    {
        id: 'pFtk0QoRJP5SsDdo0VzjZ',
        projectId: 'GueVQR50MGH0Za8wXBWhk',
        tonnes: 150,
        priceUsd: 45,
        year: 2023,
    },
    {
        id: 'EfRTtENty50cm7NoGAGyV',
        projectId: 'pdZseFCOaxd2kTcX1O2pl',
        tonnes: 250,
        priceUsd: 25,
        year: 2023,
    },
    {
        id: '5ZXxc6YO6bjOSK7BDgOmM',
        projectId: 'pdZseFCOaxd2kTcX1O2pl',
        tonnes: 50,
        priceUsd: 50,
        year: 2024,
    },
];

const ORDERS: Order[] = [
    {
        id: 'XbIzkv4IBcdtkbIReWknt',
        inventoryId: 'TiFai1QBKzkMDOZzpQewC',
        tonnesRequested: 25,
        orderedBy: 'Freya Skipper'
    },
    {
        id: 'jrH4nnnI1maW8I5x7oX5k',
        inventoryId: 'TiFai1QBKzkMDOZzpQewC',
        tonnesRequested: 10,
        orderedBy: 'Annapurrna Foss'
    }
];


function getProject(projectId: string): ProjectWithInventory {
    const project = PROJECTS.find(project => project.id === projectId);
    if(!project) throw new Error('Project not found');
    const inventory = INVENTORIES.filter(inventory => inventory.projectId === projectId);
    return {
        ...project,
        inventory
    }
}