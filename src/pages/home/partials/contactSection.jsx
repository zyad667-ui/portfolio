import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert('Message envoyé avec succès !');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                description: ''
            });
            setIsSubmitting(false);
        }, 2000);
    };


    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/zyad-fiach-708823224/',
            handle: '@zyad fiach',
            color: '#0077b5'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/zyad.fiach',
            handle: '@zyad fiach',
            color: '#e1306c'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: 'https://x.com/ZFiach',
            handle: '@zyad fiach',
            color: '#1da1f2'
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/zyad667-ui',
            handle: '@zyad fiach',
            color: '#333'
        }
    ];

    const containerStyle = {
        background: '#111',
        color: '#fff',
        padding: '60px 0'
    };
    const sectionStyle = {
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 48,
        alignItems: 'flex-start',
        justifyContent: 'center'
    };
    const formStyle = {
        background: '#18181c',
        borderRadius: 24,
        padding: 36,
        minWidth: 340,
        maxWidth: 480,
        flex: 1,
        boxShadow: '0 4px 32px #000a',
        border: '1.5px solid #222'
    };
    const inputStyle = {
        width: '100%',
        padding: '14px 16px 14px 44px',
        background: '#23232b',
        border: '1.5px solid #333',
        borderRadius: 12,
        color: '#fff',
        fontSize: 16,
        marginBottom: 18,
        outline: 'none',
        transition: 'border 0.2s'
    };
    const textareaStyle = {
        ...inputStyle,
        minHeight: 100,
        resize: 'vertical'
    };
    const iconStyle = {
        position: 'absolute',
        left: 14,
        top: 16,
        color: '#888',
        width: 20,
        height: 20
    };
    const fieldWrapper = { position: 'relative', marginBottom: 18 };
    const buttonStyle = {
        width: '100%',
        background: '#fff',
        color: '#111',
        padding: '14px 0',
        borderRadius: 12,
        fontWeight: 700,
        fontSize: 17,
        border: 'none',
        cursor: 'pointer',
        marginTop: 8,
        transition: 'background 0.2s, color 0.2s, transform 0.2s'
    };
    const socialCardStyle = (color) => ({
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        background: '#18181c',
        borderRadius: 16,
        padding: '18px 24px',
        marginBottom: 18,
        border: `1.5px solid ${color}`,
        textDecoration: 'none',
        color: '#fff',
        transition: 'box-shadow 0.2s, border 0.2s, transform 0.2s',
        boxShadow: '0 2px 12px #0004',
        cursor: 'pointer'
    });

    return (
        <div style={containerStyle}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <h2 style={{ fontSize: 36, fontWeight: 400, marginBottom: 12, letterSpacing: 1 }}>Contactez-moi</h2>
                <p style={{ color: '#bbb', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
                    Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets.
                </p>
            </div>
            <div style={sectionStyle}>
                {/* Formulaire */}
                <div style={formStyle}>
                    <div style={fieldWrapper}>
                        <User style={iconStyle} />
                        <input
                            style={inputStyle}
                            type="text"
                            name="name"
                            placeholder="Nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={fieldWrapper}>
                        <Mail style={iconStyle} />
                        <input
                            style={inputStyle}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={fieldWrapper}>
                        <Phone style={iconStyle} />
                        <input
                            style={inputStyle}
                            type="tel"
                            name="phone"
                            placeholder="Téléphone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={fieldWrapper}>
                        <MessageSquare style={iconStyle} />
                        <input
                            style={inputStyle}
                            type="text"
                            name="subject"
                            placeholder="Sujet"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={fieldWrapper}>
                        <MessageSquare style={iconStyle} />
                        <textarea
                            style={textareaStyle}
                            name="description"
                            placeholder="Description de votre projet..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={5}
                        />
                    </div>
                    <button type="submit" style={buttonStyle} disabled={isSubmitting} onClick={handleSubmit}>
                        {isSubmitting ? (
                            <span>Envoi...</span>
                        ) : (
                            <>
                                <Send style={{ marginRight: 8, verticalAlign: 'middle' }} />
                                Envoyer le message
                            </>
                        )}
                    </button>
                </div>
                {/* Réseaux sociaux */}
                <div style={{ flex: 1, minWidth: 280, maxWidth: 400 }}>
                    <h3 style={{ fontSize: 24, fontWeight: 400, marginBottom: 24 }}>Retrouvez-moi sur</h3>
                    {socialLinks.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                style={socialCardStyle(social.color)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px #0008';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 12px #0004';
                                }}
                            >
                                <Icon style={{ width: 28, height: 28, color: social.color }} />
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: 18 }}>{social.name}</div>
                                    <div style={{ color: '#bbb', fontSize: 15 }}>{social.handle}</div>
                                </div>
                            </a>
                        );
                    })}
                    <div style={{
                        background: '#23232b',
                        borderRadius: 16,
                        padding: 18,
                        marginTop: 32,
                        textAlign: 'center',
                        color: '#7fff7f',
                        fontWeight: 600,
                        fontSize: 16
                    }}>
                        <div style={{ marginBottom: 8 }}>🟢 Disponible maintenant</div>
                        <div style={{ color: '#bbb', fontWeight: 400 }}>
                            Je suis actuellement disponible pour de nouveaux projets et collaborations.<br />
                            N'hésitez pas à me contacter pour discuter de vos idées !
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;