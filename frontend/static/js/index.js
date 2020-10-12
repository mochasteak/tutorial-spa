console.log('index.js called');

const router = async () => {
    const routes = [
        {path: '/', view: () => console.log('Viewing dashboard') },
        {path: '/posts', view: () => console.log('Viewing posts') },
        {path: '/settings', view: () => console.log('Viewing settings') },
    ];

    // check if any routes match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    // find JUST the matching route
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // Define a 'not found' route
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
        console.log('Route not found, defaulting to '+ routes[0].path);
    }

    console.log('potentialMatches:>> ', potentialMatches);
    console.log(match.route.view());

};

document.addEventListener('DOMContentLoaded', () => router());