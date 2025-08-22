import SocialButtons from './SocialButtons.js';
import '../app/footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <span>Andrew Le</span>
                <SocialButtons />
            </div>
        </footer>
    );
}