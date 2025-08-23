# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: [GitHub Repository](https://github.com/alatise001/interractive_card?tab=readme-ov-file)
- Live Site URL: [Live Demo](https://interractive-card.vercel.app/)

## My process

### Built with

- **Frontend Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom utility classes
- **Form Management**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui component library
- **State Management**: React Context API with localStorage persistence
- **Typography**: Space Grotesk font (Google Fonts)
- **Development**: TypeScript for type safety
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Key Features Implemented

- ✅ Real-time card preview updates
- ✅ Comprehensive form validation (Zod schema)
- ✅ Card number formatting with spaces
- ✅ Gradient borders and focus states
- ✅ Responsive design (mobile & desktop)
- ✅ Form state persistence with localStorage
- ✅ Custom gradient styling following design guide
- ✅ Input validation for card number (numbers only) and cardholder name (letters only)

### What I learned

This project was an excellent opportunity to practice modern React patterns and form handling. Here are some key learnings:

**1. Advanced Form Validation with Zod**

```javascript
const formSchema = z.object({
  cardNumber: z
    .string()
    .min(16, { message: "Card number must be 16 digits" })
    .max(16, { message: "Card number must be 16 digits" })
    .regex(/^\d+$/, { message: "Wrong format, numbers only" }),
  cardholderName: z
    .string()
    .min(1, { message: "Cardholder name is required" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),
});
```

**2. Real-time Input Formatting**

```javascript
const formatCardNumber = (value) => {
  const digits = value.replace(/\D/g, "");
  const limitedDigits = digits.slice(0, 16);
  return limitedDigits.replace(/(\d{4})(?=\d)/g, "$1 ");
};
```

**3. Custom Gradient Focus States**

```css
.focus-gradient-border:focus-visible {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box, linear-gradient(
        135deg,
        var(--gradient-start),
        var(--gradient-end)
      ) border-box;
}
```

**4. Context API for State Management**

```javascript
const { formData, setFormData } = React.useContext(FormContext);

useEffect(() => {
  const subscription = form.watch((value) => {
    setFormData(value); // Real-time updates to card preview
  });
  return () => subscription.unsubscribe();
}, [form, form.watch, setFormData]);
```

### Continued development

Areas I want to continue focusing on in future projects:

- **Advanced Animation**: Implementing smooth card flip animations and micro-interactions
- **Accessibility**: Adding better screen reader support and keyboard navigation
- **Testing**: Writing comprehensive unit and integration tests with Jest and React Testing Library
- **Performance**: Optimizing bundle size and implementing code splitting
- **Security**: Adding client-side security measures for form data handling
- **Internationalization**: Supporting multiple languages and currencies
- **Advanced Validation**: Implementing real credit card validation algorithms (Luhn algorithm)

### Useful resources

- [React Hook Form Documentation](https://react-hook-form.com/) - Excellent documentation for form management in React
- [Zod Validation Library](https://zod.dev/) - TypeScript-first schema validation with static type inference
- [Tailwind CSS Gradient Documentation](https://tailwindcss.com/docs/gradient-color-stops) - Helped with implementing custom gradient borders
- [shadcn/ui Components](https://ui.shadcn.com/) - High-quality, customizable UI components built with Radix UI
- [Next.js App Router Guide](https://nextjs.org/docs/app) - Comprehensive guide for the new App Router architecture
- [CSS Gradient Border Technique](https://css-tricks.com/gradient-borders-in-css/) - Detailed explanation of the gradient border implementation

## Author

- Frontend Mentor - [@alatise001](https://www.frontendmentor.io/profile/alatise001)
- GitHub - [@alatise001](https://github.com/alatise001)

## Acknowledgments

Special thanks to:

- **Frontend Mentor** for providing this excellent challenge that covers real-world development scenarios
- **The React Hook Form team** for creating such an intuitive form management library
- **shadcn** for the beautifully designed and accessible UI components
- **The Tailwind CSS community** for extensive documentation and examples
- **Vercel team** for Next.js and the amazing developer experience

This project was a great learning experience that helped me understand advanced form handling, validation patterns, and modern React development practices. The challenge pushed me to implement features like real-time updates, complex validation, and responsive design while maintaining clean, maintainable code.

---

## 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/interactive-card-form.git

# Navigate to project directory
cd interactive-card-form

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

*
