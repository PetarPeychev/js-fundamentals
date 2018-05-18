function moviePrices([title, day]) {
    const _title = title.toLowerCase();
    const _day = day.toLowerCase();
    if (_title === 'the godfather') {
        switch (_day) {
            case 'monday': return 12; break;
            case 'tuesday': return 10; break;
            case 'wednesday': return 15; break;
            case 'thursday': return 12.5; break;
            case 'friday': return 15; break;
            case 'saturday': return 25; break;
            case 'sunday': return 30; break;
            default: return 'error';
        }
    }
    else if (_title === 'schindler\'s list') {
        switch (_day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': return 8.5; break;
            case 'saturday':
            case 'sunday': return 15; break;
            default: return 'error';
        }
    }
    else if (_title === 'casablanca') {
        switch (_day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': return 8; break;
            case 'saturday':
            case 'sunday': return 10; break;
            default: return 'error';
        }
    }
    else if (_title === 'the wizard of oz') {
        switch (_day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': return 10; break;
            case 'saturday':
            case 'sunday': return 15; break;
            default: return 'error';
        }
    }
    else {
        return 'error';
    }
}