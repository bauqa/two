
import {  useState } from 'react';
import './header.css';
//img
export default function Header(){
    const [block,setblock] = useState({data: [
        {name: 'Стул Фаиза',category:'стул', 
        img: 'https://zeta.kz/upload/ilab/resize_cache/iblock/66f/03uhnrsaft6a899gsk7lgketj1w8irbk.jpg',
        buy: 2030},
        {name: 'Стул Фаиза',category:'стул', 
        img: 'https://zeta.kz/upload/ilab/resize_cache/iblock/363/47ken113qrhh15p0vc7uzpw1q3lgvvz9.jpg',
        buy: 5500},
        {name: 'Стул Фаиза сочный',category:'стул', 
        img: 'https://zeta.kz/upload/ilab/resize_cache/iblock/b49/kq3fhw9ki3k9lt5m8308xljemelo2qwy.jpg',
        buy: 2700},
        {name: 'Стол каркас',category:'стол', 
        img: 'https://kostanay.zeta.kz/uploads/product_images/5423/604f5829d5ac6_thumb.jpg',
        buy: 7800},
        {name: 'Стол Паук',category:'стол', 
        img: 'https://kostanay.zeta.kz/uploads/product_images/5836/60dabb21bde07_thumb.jpg',
        buy: 9990},
    ],
    names: 'all',
    categories: 'all'});

    let [cartOpen, setcart] = useState(false)
    const [items,setitems] = useState([])
    
    // if(block.categories && block.categories!=='all'){
    //     data = data.filter(d=> d.category=== block.categories)
    // }.
    // onClick={(prev)=>{
    //     setblock({...block, categories: 'фрукт'})
    // }}
    let menuItem = [
        {name: 'Про нас',
        link: '/'},
        {name: 'Контакты',
        link: '/'},
        {name: 'Кабинет',
        link: 'https://www.odigo.com/'},
    ];
    
    let data = block.data
    let [or, setor] = useState(false)
    function addto(item){
        setitems([...items, item])
        console.log(items)
    }
    function shoporder(items){
        return (<>
        {items.map((it)=>{
            return(<div className='kord' key={it} >
                <img src={it.img} alt={it.name} key={it} className='img_s'/>

                <h1 className='s' key={it} >{it.name }</h1>
                <h1 className='buy' key={it} >{it.buy} тг</h1>
                
                </div>)})}
                {items.forEach(element => {
                    res += element.buy
                })}
                <button className='btn two' onClick={()=>setor(true)}>Оформить заказ</button>
                <p className='d'>Всего: <p>{res} тг</p></p>
            </>);
    }
    let res = 0;
    function show(){
        cartOpen = !cartOpen
        return(<div className='modal' onClick={()=>setor(false)} >
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <p>Ваше имя</p><input type='text'/>
            </div>
        </div>)
    }
        
    
    function shownoth(){
        return(<div className='n'><p className='nos'>Здесь нет товаров</p></div>)
    }
    return(<>
            
            <header className="header">
                <div className='container'>

                    {or&&(show())}
                    
                    <div className='header_content'>
                        <div className='menu'>
                            <h1 className='title_head'>House Staff</h1>
                            <div  className='menu_n'>
                            {cartOpen &&(
                                    <div className='shop-cart'>
                                        {items.length > 0 ? shoporder(items) : shownoth()}
                                        
                                    </div>
                            )}
                            <button 
                                className='korzina' 
                                onClick={()=>{setcart(cartOpen = !cartOpen); console.log(cartOpen)}}>
                                    <img className='foto' 
                                    src='https://img.icons8.com/windows/344/shopping-basket-2.png' 
                                    alt='Корзина'/>
                                </button>
                                {menuItem.map((item)=>{
                                    return <a className='nav_menu' href={item.link}>{item.name}</a>
                                })}


                                
                                
                            </div>
                            
                        </div>
                        
                        <div className='img_head'>
                            <h2 className='img_text'>Лучшие товары для вашего дома</h2>
                        </div>
                        <hr/>
                        <div className='products'>
                            {data.map((item,idx)=>{
                                return(<div className='product'>
                                    <h1 className='name'>{item.name}</h1>
                                    <img src={item.img} alt={item.name} className='img'/>
                                    <p className='buy'>{item.buy} тг</p>
                                    <button className='btn' onClick={()=>addto(item)} >Купить</button>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>      
            </header>
        </>
    
    );
}
