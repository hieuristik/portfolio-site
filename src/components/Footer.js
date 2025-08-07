import SocialButtons from './SocialButtons.js';
import '../app/footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <span>© 2025 Andrew Le. All rights reserved.</span>
                <SocialButtons />
            </div>
        </footer>
    );
}