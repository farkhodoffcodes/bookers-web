import React from 'react';
import { useModal } from '../../../helpers/stateManagment/modal';

const ModalForm: React.FC = () => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-xl mb-4">Форма заявки</h2>
        <input type="text" placeholder="Имя мастера или название салона" className="w-full mb-2 p-2 border" />
        <input type="text" placeholder="Тип мероприятия" className="w-full mb-2 p-2 border" />
        <input type="text" placeholder="Название мероприятия" className="w-full mb-2 p-2 border" />
        <textarea placeholder="Описание мероприятия" className="w-full mb-2 p-2 border"></textarea>
        <input type="datetime-local" placeholder="Дата и время проведения" className="w-full mb-2 p-2 border" />
        <input type="text" placeholder="Место проведения" className="w-full mb-2 p-2 border" />
        <input type="text" placeholder="Контактная информация" className="w-full mb-2 p-2 border" />
        <input type="text" placeholder="Стоимость участия" className="w-full mb-2 p-2 border" />
        <textarea placeholder="Дополнительная информация" className="w-full mb-2 p-2 border"></textarea>
        <button onClick={closeModal} className="bg-blue-500 text-white p-2 rounded-md">
          Отправить заявку
        </button>
      </div>
    </div>
  );
}

export default ModalForm;
