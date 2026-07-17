'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ dict, preset }: { dict: any, preset?: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState(preset ? preset + '\n\n' : '');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    // Make sure these are set in .env.local
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    if (!serviceId || !templateId || !publicKey) {
      alert("EmailJS 설정이 필요합니다. .env.local 파일에 API 키를 입력해주세요.");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
          setStatus('success');
          setIsSubmitting(false);
          form.current?.reset();
          setMessage(''); // Clear message on success
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-8">
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-700 mb-3">{dict.contact}</label>
        <input 
          type="text" 
          name="reply_to"
          required
          className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">{dict.message}</label>
        <textarea 
          rows={8} 
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={dict.message_placeholder || "생산하시고자 하는 제품의 종류, 예상 수량, 희망 납기일, 기타 참고 사항을 자유롭게 작성해 주세요.\n\n예) 스마트폰 가죽 케이스, 1,000개, 8월 말 납품 희망"} 
          className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-slate-400"
        ></textarea>
      </div>

      <div className="flex items-start gap-3 my-4">
        <input 
          type="checkbox" 
          id="privacy" 
          required 
          className="mt-1 w-4 h-4 text-amber-600 bg-slate-50 border-slate-300 rounded focus:ring-amber-500 cursor-pointer" 
        />
        <label htmlFor="privacy" className="text-sm text-slate-600 cursor-pointer select-none">
          {dict.privacy_consent || "개인정보 수집 및 이용에 동의합니다."} <span className="text-amber-600 font-bold">(필수)</span><br />
          <span className="text-xs text-slate-400">수집된 개인정보는 원활한 상담 목적으로만 활용되며 안전하게 관리됩니다.</span>
        </label>
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium">
          성공적으로 문의가 접수되었습니다. 빠르게 확인 후 회신드리겠습니다!
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium">
          문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
        </div>
      )}

      <div className="pt-2">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full md:w-auto px-10 bg-slate-900 text-white font-bold py-4 rounded-xl transition-all duration-300 transform ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-700 hover:shadow-lg hover:-translate-y-1'}`}
        >
          {isSubmitting ? '전송 중...' : dict.submit}
        </button>
      </div>
    </form>
  );
}
