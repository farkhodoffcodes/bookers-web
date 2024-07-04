"use client";
import { useState } from 'react'
import { MdCancel } from 'react-icons/md';

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    masterName: '',
    eventType: '',
    eventName: '',
    eventDescription: '',
    eventDateTime: '',
    eventLocation: '',
    contactInfo: '',
    participationFee: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className="bg-gray-100 flex items-center justify-center rounded-md">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-xl w-full">
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold mb-6 text-center">Форма заявку</h2>
            <button onClick={onClose}>
              <MdCancel color='#9C0B35' fontSize={20} />
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Имя мастера или название салона*</label>
                <input
                  type="text"
                  name="masterName"
                  value={formData.masterName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Тип мероприятия*</label>
                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Название мероприятия*</label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Описание мероприятия*</label>
                <input
                  type="text"
                  name="eventDescription"
                  value={formData.eventDescription}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Дата и время проведения*</label>
                <input
                  type="datetime-local"
                  name="eventDateTime"
                  value={formData.eventDateTime}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Место проведения*</label>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Контактная информация*</label>
                <input
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Стоимость участия</label>
                <input
                  type="text"
                  name="participationFee"
                  value={formData.participationFee}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Дополнительная информация*</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                rows={3}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
