-- DataFlow Database Schema (Supabase/PostgreSQL)

-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    role VARCHAR(50), -- Analyst, Engineer, Scientist, etc.
    created_at TIMESTAMP DEFAULT NOW()
);

-- Projects Table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    template_id UUID REFERENCES templates(id),
    status VARCHAR(50), -- e.g., active, completed
    completion_percent INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Templates Table
CREATE TABLE templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100), -- e.g., ML, ETL, Dashboard
    created_by UUID REFERENCES users(id),
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Skills Table
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(100)
);

-- User Skills Progress Table
CREATE TABLE user_skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    skill_id UUID REFERENCES skills(id),
    proficiency INT DEFAULT 0, -- 0-100 scale
    last_updated TIMESTAMP DEFAULT NOW()
);

-- Project Progress Table
CREATE TABLE project_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id),
    phase VARCHAR(100), -- e.g., Data Cleaning, EDA
    percent_complete INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Portfolio Items Table
CREATE TABLE portfolio_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    project_id UUID REFERENCES projects(id),
    case_study TEXT,
    export_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Daily Goals Table
CREATE TABLE daily_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    project_id UUID REFERENCES projects(id),
    goal_text TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    target_date DATE,
    created_at TIMESTAMP DEFAULT NOW()
);
