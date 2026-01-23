# Sabre Team Directory

## Overview

This project is a small full-stack app:

- **Backend:** ColdFusion (Lucee) running under CommandBox
- **Database:** SQLite (`sabre.db`, created from `setup.sql`)
- **Frontend:** React (Vite)

The app exposes a ColdFusion API that returns employee data as JSON and a React UI that fetches and displays the team directory with a search box.

> Note: I experimented with using a Lucee datasource + SQLite JDBC driver. The environment made that difficult to complete cleanly in the available time, so the final `Employees.cfc` returns a static list of employees (same data as in `sabre.db`). The React app still uses `fetch` and displays an error message if the request fails. In a production setup I would switch `Employees.cfc` to query the `Employees` table via `<cfquery>` and `<cfqueryparam>`.

---

## Requirements

- Node.js (LTS) + npm
- CommandBox
- SQLite (`sqlite3` CLI)

---

## Setup Instructions

### 1. Database

```bash
cd SabreProject
sqlite3 sabre.db < setup.sql   # creates the Employees table and sample data
```
