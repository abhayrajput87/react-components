import React, { useState } from 'react'
import Modal from '../Components/Modal';
import Button from '../Components/Button';

function ModalPage() {

    const [showModal,setShowModal]=useState(false);
    
     const handleClick=()=>{
         setShowModal(true);
     }
     const handleClose=()=>{
      setShowModal(false);
     }

     const modal= <Modal onClose={handleClose} actionBar={<Button  onClick={handleClose}  primary>Accept me</Button>} >
      <p>Hello I am terms and conditions...plzz accept mee</p>
     </Modal>

  return (

  <div>
    <Button onClick={handleClick} primary rounded >ShowModal</Button>
    {showModal && modal}
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consectetur alias libero quae minima laboriosam maxime dicta ex quia, commodi quis laborum deleniti iste cupiditate saepe officia tempora doloremque. Labore eius placeat, blanditiis asperiores quos fuga, corporis quam minus provident numquam esse porro dolore, et est! Exercitationem reprehenderit a ad eum fugiat quam dolorem, aperiam accusantium, dicta repudiandae temporibus fugit et at. Explicabo ipsum dicta eum fugiat? Iure exercitationem voluptate excepturi similique quaerat maxime quos quibusdam deleniti tenetur assumenda harum aliquid laborum qui aspernatur voluptatum ullam, alias, a nihil hic accusamus. Illo ad placeat rerum maiores aliquam. Iure provident quasi earum dolores sequi minima dicta at, in, ex, numquam temporibus quaerat veniam. Eaque velit error quis tenetur maxime id mollitia itaque obcaecati neque, iusto quod vel eius veniam voluptatum hic a ad deleniti ducimus, distinctio modi omnis nisi! Facere voluptatem quaerat tempore maxime ullam officia atque et voluptatibus dolores? Vel quae reiciendis odit, corrupti vero possimus fuga placeat distinctio voluptatem voluptas animi similique excepturi assumenda explicabo rem quidem laboriosam cum officiis aut non dolorum! Dolores, eveniet nemo! Quia, quisquam nam non eum ipsam ut suscipit. Distinctio eum fuga nesciunt, tenetur eaque suscipit itaque commodi porro omnis veritatis consectetur corrupti aut.</p>  </div>

  )
}

export default ModalPage;