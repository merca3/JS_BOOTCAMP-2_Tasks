import {useState} from 'react';

function Tags() {
    const [tags, setTags] = useState('');
    const [tagsDisplay, setTagsDisplay] = useState('');
    const tagsCloud = ['Meeeeouw', 'cough', 'furball', 'into', 'food', 'bowl', 'then', 'scratch', 'owner', 
                    'for', 'a', 'new', 'one', 'experiences', 'short', 'bursts', 'of', 'poo-phoria', 'after', 
                    'going', 'to', 'the', 'loo', 'scratch', 'my', 'tummy', 'actually', 'i', 'hate', 'you', 
                    'now', 'fight', 'me', 'so', 'freak', 'human', 'out', 'make', 'funny', 'noise', 'mow', 
                    'mow', 'mow', 'mow', 'mow', 'mow', 'success', 'now', 'attack', 'human', 'yet', 'drink', 
                    'from', 'the', 'toilet', 'but', 'sitting', 'in', 'a', 'box.', 'Show', 'belly.', 'Spit', 
                    'up', 'on', 'light', 'gray', 'carpet', 'instead', 'of', 'adjacent', 'linoleum', 'good', 
                    'now', 'the', 'other', 'hand,', 'too', 'check', 'cat', 'door', 'for', 'ambush', '10', 
                    'times', 'before', 'coming', 'in'];
    
    const updateTags = (event) => {
        setTags(event.target.value);
        setTagsDisplay(tags.split(' ').join(', '));
    }                

    const tagsElements = tagsCloud.map((tag, index) => {
        const tagsArray = tags.split(' ');
        const classes = tagsArray.indexOf(tag) !== -1 ? 'badge bg-warning mx-2' : 'badge bg-primary mx-2';
        return <span key={index} className={classes}>{tag}</span>
    })

    return (
        <div className="container">
            <h2 className="mt-3">Looking for tags: {tagsDisplay}</h2>
            <input type="text" value={tags} className="form-control my-3" onChange={updateTags} />
            <div className="text-center">{tagsElements}</div>
        </div>
    )
}

export default Tags;