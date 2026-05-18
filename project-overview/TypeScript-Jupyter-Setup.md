# Setting Up TypeScript in Jupyter Notebook on VSCode

## Prerequisites
- Windows OS
- VSCode installed
- Node.js installed

---

## Step 1 — Verify Node.js is installed
```bash
node --version
npm --version
```
If nothing shows download it from **nodejs.org/en/download**

---

## Step 2 — Install Jupyter
```bash
pip install jupyter
```

If pip is not recognized download Python from **python.org**
and make sure to check **"Add Python to PATH"** during install.

---

## Step 3 — If jupyter command is not recognized after install
Force reinstall Jupyter:
```bash
pip install jupyter --upgrade --force-reinstall
```

Then add Python Scripts to PATH in your terminal:
```bash
$env:PATH += ";C:\Users\YourUsername\AppData\Local\Programs\Python\Python312\Scripts"
```

Replace **YourUsername** with your actual Windows username.

---

## Step 4 — Install tslab globally
```bash
npm install -g tslab
```

---

## Step 5 — Register tslab as a Jupyter kernel
```bash
tslab install
```

You should see:
```
Installing TypeScript kernel...
Installed TypeScript kernel.
```

---

## Step 6 — Verify the kernel is installed
```bash
jupyter kernelspec list
```

You should see `tslab` in the list:
```
Available kernels:
  tslab      C:\Users\YourUsername\AppData\Roaming\jupyter\kernels\tslab
  python3    C:\...
```

---

## Step 7 — Install VSCode Extensions
Open VSCode and install these two extensions:
1. Press `Ctrl + Shift + X`
2. Search and install **Jupyter** by Microsoft
3. Search and install **TypeScript + Webpack Problem Matchers** by Microsoft
4. Reload VSCode after installing both

---

## Step 8 — Open your notebook in VSCode
1. Open your `.ipynb` file in VSCode
2. Click the kernel selector at the top right
3. Select **tslab**
4. Test with a new cell:
```typescript
console.log("TypeScript works in Jupyter");
```

If it prints — you are good to go.

---

## Common Errors and Fixes

| Error | Fix |
| :--- | :--- |
| `jupyter` not recognized | Run `pip install jupyter --upgrade --force-reinstall` then add Scripts folder to PATH |
| `tslab` not recognized | Run `npm install -g tslab` and verify Node.js is installed |
| tslab not showing in VSCode | Run `tslab install` again and reload VSCode |
| Type errors in notebook | Add `// @ts-nocheck` at the top of the cell to suppress |
| Cannot find module | Run `npm install` in the project directory |
| kernelspec not found | Run `jupyter kernelspec list` to verify tslab is registered |