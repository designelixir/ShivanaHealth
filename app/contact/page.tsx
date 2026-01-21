export default function ContactPage() {
  return (
    <main>
      <h1 className="centered-text cream-text section-padding" style={{ fontSize: '48px' }}>
        Contact Us
      </h1>
      <div className="flex-center-center">
        <iframe
          id="JotFormIFrame-260205078669058"
          title="ShivanaHealth Form"
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/260205078669058"
          style={{ minWidth: '100%', height: '900px', border: 'none' }}
        />
      </div>
    </main>
  );
}