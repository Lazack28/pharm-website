interface Window {
    emailjs: {
      init: (publicKey: string) => void
      sendForm: (serviceId: string, templateId: string, form: HTMLFormElement) => Promise<any>
      send: (serviceId: string, templateId: string, templateParams: any) => Promise<any>
    }
  }
  