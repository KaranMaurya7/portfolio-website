import reactImg from '../assets/React.png';
import HtmlImg from '../assets/htmlCssJs.jpg';
import nodeImg from '../assets/node.jpg';



export function ProjectElement({ item, setShow, dark }) {

    const handleShow = (item) => {
        if (setShow) {
            setShow({});
        }

        setShow(item);
    }

    return (<>
        <div key={item.id} className={dark ? 'projectItem projectItemDark' : 'projectItem projectItemLight'}>

            <img className={dark ? '' : 'littleShadow'} src={
                item.code === 'React' ? reactImg : item.code === 'HTML' ? HtmlImg : nodeImg} alt='project' />

            <h3 className={dark ? 'textcolorwhite' : 'textcolorblack'}>{item.title}</h3>

            <div className='flex projectLink'>



                {item.deploy && <a className={dark ? " flex whiteBorder textcolorwhite" : " flex  textcolorblack buttonS"} href={item.demo} target='_blank' rel="noopener noreferrer">
                    Try Demo

                </a>}
                {item.github === '' ?
                    ''
                    :
                    <a className={dark ? " flex whiteBorder textcolorwhite" : " flex  textcolorblack buttonS"} href={item.github} target='_blank' rel="noopener noreferrer">
                        Github
                    </a>}


                <a className={dark ? " flex whiteBorder textcolorwhite" : " flex  textcolorblack buttonS"} onClick={() => handleShow(item)} href='#projectD'>
                    About
                </a>

            </div>
        </div>


    </>)
}